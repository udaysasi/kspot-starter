#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
	process.argv
		.slice(2)
		.map((a, i, arr) => (a.startsWith("--") ? [a.slice(2), arr[i + 1]] : []))
		.filter(Boolean)
);

if (!args.spec || !args.out) {
	console.error(
		"Usage: node scripts/generate-routes.mjs --spec ../openapi/public-api.json --out ./src/generatedRoutes.ts"
	);
	process.exit(1);
}

const specPath = path.resolve(args.spec);
const outPath = path.resolve(args.out);

if (!fs.existsSync(specPath)) {
	console.error("Spec not found at", specPath);
	process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

/** Convert a tag to our SDK api key: "SiteHierarchy" -> "siteHierarchy" */
const prettyKey = (s) => {
	const clean = String(s).replace(/[^a-zA-Z0-9]+/g, " ");
	const pascal = clean
		.split(" ")
		.filter(Boolean)
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join("");
	const noService = pascal.endsWith("Service") ? pascal.slice(0, -7) : pascal;
	return noService[0].toLowerCase() + noService.slice(1);
};

/** OpenAPI path -> Express path: '/api/v1/users/{id}' -> '/api/v1/users/:id' */
const expressifyPath = (p) => p.replace(/\{([^}]+)\}/g, ":$1");

/** Try to mimic codegen’s method naming:
 *  - remove separators (including underscore) and camelCase segments
 *  - fold `_123` -> `123`
 *  - keep alphanumerics
 */
const toCamelMethod = (opId) => {
	const pieces = String(opId).split(/[^a-zA-Z0-9]+/).filter(Boolean);
	if (!pieces.length) return "unknown";
	const first = pieces[0].charAt(0).toLowerCase() + pieces[0].slice(1);
	const rest = pieces
		.slice(1)
		.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
		.join("");
	// also squash trailing _digits -> digits (e.g., getSites_1 -> getSites1)
	return (first + rest).replace(/_(\d+)$/, "$1");
};

const lines = [];
lines.push(`// AUTO-GENERATED. Do not edit by hand.`);
lines.push(`import express from "express";`);
lines.push(`import type { Request, Response, NextFunction } from "express";`);
lines.push(`import { sdk } from "./sdk.js";`);
lines.push(`export const generatedRoutes = express.Router();`);
lines.push(``);
lines.push(`function buildArgs(req: Request, hasBody: boolean, paramNames: string[], queryNames: string[]): any {`);
lines.push(`  const args: any = {};`);
lines.push(`  for (const name of paramNames) if (req.params[name] !== undefined) args[name] = req.params[name];`);
lines.push(`  for (const name of queryNames) if (req.query[name] !== undefined) args[name] = req.query[name];`);
lines.push(`  if (hasBody && req.body !== undefined) args.requestBody = req.body;`);
lines.push(`  return args;`);
lines.push(`}`);
lines.push(``);
lines.push(`// Resolve the real SDK method name, tolerating codegen renames (camelCase, underscore removal, numeric suffix)`);
lines.push(`function resolveSdkMethod(service: any, opId: string): string | null {`);
lines.push(`  if (!service) return null;`);
lines.push(`  const candidates = new Set<string>();`);
lines.push(`  candidates.add(opId);`);
lines.push(`  candidates.add(opId.replace(/_(\\d+)$/,'$1')); // foo_1 -> foo1`);
lines.push(`  candidates.add(opId.replace(/[^a-zA-Z0-9]+/g, '')); // strip all separators`);
lines.push(`  const camel = (id: string) => {`);
lines.push(`    const parts = id.split(/[^a-zA-Z0-9]+/).filter(Boolean);`);
lines.push(`    if (!parts.length) return id;`);
lines.push(`    const first = parts[0].charAt(0).toLowerCase() + parts[0].slice(1);`);
lines.push(`    const rest = parts.slice(1).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');`);
lines.push(`    return (first + rest).replace(/_(\\d+)$/, '$1');`);
lines.push(`  };`);
lines.push(`  candidates.add(camel(opId));`);
lines.push(`  // Try the options`);
lines.push(`  for (const name of candidates) {`);
lines.push(`    if (name && typeof (service as any)[name] === 'function') return name;`);
lines.push(`  }`);
lines.push(`  return null;`);
lines.push(`}`);
lines.push(``);

const methods = ["get", "post", "put", "patch", "delete", "options", "head"];
let count = 0;

for (const [rawPath, methodMap] of Object.entries(spec.paths || {})) {
	for (const [verb, op] of Object.entries(methodMap)) {
		const v = String(verb).toLowerCase();
		if (!methods.includes(v)) continue;

		const operationId = op.operationId;
		const tags = op.tags || [];
		const tag = tags[0] || "Default";
		if (!operationId) continue;

		const serviceKey = prettyKey(tag);
		const expressPath = expressifyPath(rawPath);
		const hasBody = !!op.requestBody;
		const params = (op.parameters || []).filter((p) => p.in === "path").map((p) => p.name);
		const queries = (op.parameters || []).filter((p) => p.in === "query").map((p) => p.name);

		// Pre-compute a "best guess" method name (camelCase, no underscores before digits)
		const guessedMethod = toCamelMethod(operationId);

		lines.push(`// ${v.toUpperCase()} ${rawPath}  ->  sdk.api.${serviceKey}.${guessedMethod}(...) [from opId="${operationId}"]`);
		lines.push(`generatedRoutes.${v}("${expressPath}", async (req: Request, res: Response, next: NextFunction) => {`);
		lines.push(`  try {`);
		lines.push(`    const args = buildArgs(req, ${hasBody}, ${JSON.stringify(params)}, ${JSON.stringify(queries)});`);
		lines.push(`    const service = (sdk.api as any)["${serviceKey}"];`);
		lines.push(`    let methodName = "${guessedMethod}";`);
		lines.push(`    if (typeof service?.[methodName] !== "function") {`);
		lines.push(`      const resolved = resolveSdkMethod(service, "${operationId}");`);
		lines.push(`      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: ${operationId}");`);
		lines.push(`    }`);
		lines.push(`    const out = await service[methodName](args);`);
		lines.push(`    res.status(200).json(out ?? null);`);
		lines.push(`  } catch (err: any) {`);
		lines.push(`    const status = err?.status || err?.statusCode || 500;`);
		lines.push(`    res.status(typeof status === "number" ? status : 500).json({`);
		lines.push(`      error: err?.message || "Request failed",`);
		lines.push(`      details: err?.body ?? err,`);
		lines.push(`      from: "${serviceKey}.${guessedMethod}"`);
		lines.push(`    });`);
		lines.push(`  }`);
		lines.push(`});`);
		lines.push(``);
		count++;
	}
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Generated ${outPath} with ${count} routes.`);
