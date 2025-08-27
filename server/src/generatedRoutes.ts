// AUTO-GENERATED. Do not edit by hand.
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { sdk } from "./sdk.js";
export const generatedRoutes = express.Router();

function buildArgs(req: Request, hasBody: boolean, paramNames: string[], queryNames: string[]): any {
  const args: any = {};
  for (const name of paramNames) if (req.params[name] !== undefined) args[name] = req.params[name];
  for (const name of queryNames) if (req.query[name] !== undefined) args[name] = req.query[name];
  if (hasBody && req.body !== undefined) args.requestBody = req.body;
  return args;
}

// Resolve the real SDK method name, tolerating codegen renames (camelCase, underscore removal, numeric suffix)
function resolveSdkMethod(service: any, opId: string): string | null {
  if (!service) return null;
  const candidates = new Set<string>();
  candidates.add(opId);
  candidates.add(opId.replace(/_(\d+)$/,'$1')); // foo_1 -> foo1
  candidates.add(opId.replace(/[^a-zA-Z0-9]+/g, '')); // strip all separators
  const camel = (id: string) => {
    const parts = id.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    if (!parts.length) return id;
    const first = parts[0].charAt(0).toLowerCase() + parts[0].slice(1);
    const rest = parts.slice(1).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    return (first + rest).replace(/_(\d+)$/, '$1');
  };
  candidates.add(camel(opId));
  // Try the options
  for (const name of candidates) {
    if (name && typeof (service as any)[name] === 'function') return name;
  }
  return null;
}

// GET /api/v1/alerts  ->  sdk.api.alertResource.findAlertsByUser(...) [from opId="findAlertsByUser"]
generatedRoutes.get("/api/v1/alerts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["keyword","showUnreadOnly","pageable"]);
    const service = (sdk.api as any)["alertResource"];
    let methodName = "findAlertsByUser";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findAlertsByUser");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findAlertsByUser");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "alertResource.findAlertsByUser"
    });
  }
});

// PUT /api/v1/alerts/alert/{alertId}  ->  sdk.api.alertResource.updateReadStatus(...) [from opId="updateReadStatus"]
generatedRoutes.put("/api/v1/alerts/alert/:alertId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["alertId"], []);
    const service = (sdk.api as any)["alertResource"];
    let methodName = "updateReadStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateReadStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateReadStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "alertResource.updateReadStatus"
    });
  }
});

// PUT /api/v1/alerts/deleteAll  ->  sdk.api.alertResource.deleteAllAlerts(...) [from opId="deleteAllAlerts"]
generatedRoutes.put("/api/v1/alerts/deleteAll", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["alertResource"];
    let methodName = "deleteAllAlerts";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteAllAlerts");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteAllAlerts");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "alertResource.deleteAllAlerts"
    });
  }
});

// PUT /api/v1/alerts/readAll  ->  sdk.api.alertResource.readAll(...) [from opId="readAll"]
generatedRoutes.put("/api/v1/alerts/readAll", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["alertResource"];
    let methodName = "readAll";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "readAll");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: readAll");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "alertResource.readAll"
    });
  }
});

// GET /api/v1/alerts/unread  ->  sdk.api.alertResource.unread(...) [from opId="unread"]
generatedRoutes.get("/api/v1/alerts/unread", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable"]);
    const service = (sdk.api as any)["alertResource"];
    let methodName = "unread";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "unread");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: unread");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "alertResource.unread"
    });
  }
});

// GET /api/v1/analytics/clientMovements  ->  sdk.api.analyticsQueries.clientMovements2(...) [from opId="clientMovements_2"]
generatedRoutes.get("/api/v1/analytics/clientMovements", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","site","tags","excludeTags","deviceType"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "clientMovements2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "clientMovements_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: clientMovements_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.clientMovements2"
    });
  }
});

// POST /api/v1/analytics/clientMovements  ->  sdk.api.analyticsQueries.clientMovements1(...) [from opId="clientMovements_1"]
generatedRoutes.post("/api/v1/analytics/clientMovements", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "clientMovements1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "clientMovements_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: clientMovements_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.clientMovements1"
    });
  }
});

// GET /api/v1/analytics/deviceDemographics  ->  sdk.api.analyticsQueries.deviceDemographics(...) [from opId="deviceDemographics"]
generatedRoutes.get("/api/v1/analytics/deviceDemographics", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","locations","tags","excludeTags","macs","searchMacWithValue","withSocialProfile","registered","deviceType","durationGTE","durationLTE","searchNextTypeIfZero","pageable"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "deviceDemographics";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deviceDemographics");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deviceDemographics");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.deviceDemographics"
    });
  }
});

// GET /api/v1/analytics/deviceSearch  ->  sdk.api.analyticsQueries.deviceSearch(...) [from opId="deviceSearch"]
generatedRoutes.get("/api/v1/analytics/deviceSearch", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["tags","excludeTags","macs","keyword","deviceType","searchNextTypeIfZero","locations","pageable"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "deviceSearch";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deviceSearch");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deviceSearch");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.deviceSearch"
    });
  }
});

// GET /api/v1/analytics/devicesForSite  ->  sdk.api.analyticsQueries.devicesForSite(...) [from opId="devicesForSite"]
generatedRoutes.get("/api/v1/analytics/devicesForSite", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","locations","tags","excludeTags","geoOnly","macs","searchMacWithValue","deviceTypes","excludePasserBy"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "devicesForSite";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "devicesForSite");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: devicesForSite");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.devicesForSite"
    });
  }
});

// GET /api/v1/analytics/distribution  ->  sdk.api.analyticsQueries.distributionQuery4(...) [from opId="distributionQuery_4"]
generatedRoutes.get("/api/v1/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","distributionType","distributionTiming","period","locations","attributes","query"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "distributionQuery4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQuery_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQuery_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.distributionQuery4"
    });
  }
});

// POST /api/v1/analytics/distribution  ->  sdk.api.analyticsQueries.distributionQueryV2(...) [from opId="distributionQueryV2"]
generatedRoutes.post("/api/v1/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "distributionQueryV2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQueryV2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQueryV2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.distributionQueryV2"
    });
  }
});

// GET /api/v1/analytics/generic  ->  sdk.api.analyticsQueries.genericQuery(...) [from opId="genericQuery"]
generatedRoutes.get("/api/v1/analytics/generic", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["query","start","finish","locations"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "genericQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "genericQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: genericQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.genericQuery"
    });
  }
});

// GET /api/v1/analytics/generic/list  ->  sdk.api.analyticsQueries.genericQueryNames1(...) [from opId="genericQueryNames_1"]
generatedRoutes.get("/api/v1/analytics/generic/list", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "genericQueryNames1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "genericQueryNames_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: genericQueryNames_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.genericQueryNames1"
    });
  }
});

// POST /api/v1/analytics/movementTree  ->  sdk.api.analyticsQueries.movementTreeV41(...) [from opId="movementTreeV4_1"]
generatedRoutes.post("/api/v1/analytics/movementTree", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "movementTreeV41";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "movementTreeV4_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: movementTreeV4_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.movementTreeV41"
    });
  }
});

// POST /api/v1/analytics/pairwiseMovement  ->  sdk.api.analyticsQueries.pairwiseMovementV41(...) [from opId="pairwiseMovementV4_1"]
generatedRoutes.post("/api/v1/analytics/pairwiseMovement", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "pairwiseMovementV41";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "pairwiseMovementV4_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: pairwiseMovementV4_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.pairwiseMovementV41"
    });
  }
});

// GET /api/v1/analytics/repeatedUsers  ->  sdk.api.analyticsQueries.usersRepeatedForTimeRangeAndLocations(...) [from opId="usersRepeatedForTimeRangeAndLocations"]
generatedRoutes.get("/api/v1/analytics/repeatedUsers", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["fromStart","fromEnd","toStart","toEnd","fromLocations","toLocations"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "usersRepeatedForTimeRangeAndLocations";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "usersRepeatedForTimeRangeAndLocations");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: usersRepeatedForTimeRangeAndLocations");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.usersRepeatedForTimeRangeAndLocations"
    });
  }
});

// GET /api/v1/analytics/runQuery  ->  sdk.api.analyticsQueries.runQuery(...) [from opId="runQuery"]
generatedRoutes.get("/api/v1/analytics/runQuery", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["query","start","finish","locations","usePassedLocations","attributes","tags","excludeTags"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "runQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "runQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: runQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.runQuery"
    });
  }
});

// POST /api/v1/analytics/runQuery  ->  sdk.api.analyticsQueries.runQueryV1(...) [from opId="runQueryV1"]
generatedRoutes.post("/api/v1/analytics/runQuery", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "runQueryV1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "runQueryV1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: runQueryV1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.runQueryV1"
    });
  }
});

// GET /api/v1/analytics/summary  ->  sdk.api.analyticsQueries.summary(...) [from opId="summary"]
generatedRoutes.get("/api/v1/analytics/summary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "summary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "summary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: summary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.summary"
    });
  }
});

// GET /api/v1/analytics/timeline  ->  sdk.api.analyticsQueries.timeline(...) [from opId="timeline"]
generatedRoutes.get("/api/v1/analytics/timeline", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["macAddresses","start","finish","locations"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "timeline";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "timeline");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: timeline");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.timeline"
    });
  }
});

// GET /api/v1/analytics/tzinfo  ->  sdk.api.analyticsQueries.getTimeZoneInfo(...) [from opId="getTimeZoneInfo"]
generatedRoutes.get("/api/v1/analytics/tzinfo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "getTimeZoneInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTimeZoneInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTimeZoneInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.getTimeZoneInfo"
    });
  }
});

// GET /api/v1/analytics/userdetails  ->  sdk.api.analyticsQueries.allUserdetails(...) [from opId="allUserdetails"]
generatedRoutes.get("/api/v1/analytics/userdetails", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["minimumDurationFilterInMillis","associated","limit","locations","start","finish"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "allUserdetails";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "allUserdetails");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: allUserdetails");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.allUserdetails"
    });
  }
});

// GET /api/v1/analytics/userdetails/{mac}  ->  sdk.api.analyticsQueries.userdetails(...) [from opId="userdetails"]
generatedRoutes.get("/api/v1/analytics/userdetails/:mac", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["mac"], ["minimumDurationFilterInMillis","limit","locations","start","finish","mergeAdjSessionsIfDiffInMinutesLE"]);
    const service = (sdk.api as any)["analyticsQueries"];
    let methodName = "userdetails";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "userdetails");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: userdetails");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "analyticsQueries.userdetails"
    });
  }
});

// GET /api/v1/attributes  ->  sdk.api.attributeResource.getAll6(...) [from opId="getAll_6"]
generatedRoutes.get("/api/v1/attributes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["keyword","purpose"]);
    const service = (sdk.api as any)["attributeResource"];
    let methodName = "getAll6";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_6");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_6");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "attributeResource.getAll6"
    });
  }
});

// POST /api/v1/attributes  ->  sdk.api.attributeResource.save7(...) [from opId="save_7"]
generatedRoutes.post("/api/v1/attributes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["attributeResource"];
    let methodName = "save7";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_7");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_7");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "attributeResource.save7"
    });
  }
});

// GET /api/v1/attributes/{purpose}/{name}  ->  sdk.api.attributeResource.getByNameAndPurpose(...) [from opId="getByNameAndPurpose"]
generatedRoutes.get("/api/v1/attributes/:purpose/:name", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["purpose","name"], []);
    const service = (sdk.api as any)["attributeResource"];
    let methodName = "getByNameAndPurpose";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getByNameAndPurpose");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getByNameAndPurpose");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "attributeResource.getByNameAndPurpose"
    });
  }
});

// GET /api/v1/audits  ->  sdk.api.auditResource.getByDatesAsCSV(...) [from opId="getByDatesAsCSV"]
generatedRoutes.get("/api/v1/audits", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["fromDate","toDate"]);
    const service = (sdk.api as any)["auditResource"];
    let methodName = "getByDatesAsCSV";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getByDatesAsCSV");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getByDatesAsCSV");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "auditResource.getByDatesAsCSV"
    });
  }
});

// POST /api/v1/auth/login  ->  sdk.api.loginTokenManagement.login(...) [from opId="login"]
generatedRoutes.post("/api/v1/auth/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["loginTokenManagement"];
    let methodName = "login";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "login");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: login");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "loginTokenManagement.login"
    });
  }
});

// GET /api/v1/ble/analytics/deviceSummary  ->  sdk.api.bleAnalyticsResource.deviceSummary(...) [from opId="deviceSummary"]
generatedRoutes.get("/api/v1/ble/analytics/deviceSummary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","tagged","locations"]);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "deviceSummary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deviceSummary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deviceSummary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.deviceSummary"
    });
  }
});

// POST /api/v1/ble/analytics/distribution  ->  sdk.api.bleAnalyticsResource.distributionQuery3(...) [from opId="distributionQuery_3"]
generatedRoutes.post("/api/v1/ble/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "distributionQuery3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQuery_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQuery_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.distributionQuery3"
    });
  }
});

// GET /api/v1/ble/analytics/generic/list  ->  sdk.api.bleAnalyticsResource.genericQueryNames(...) [from opId="genericQueryNames"]
generatedRoutes.get("/api/v1/ble/analytics/generic/list", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "genericQueryNames";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "genericQueryNames");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: genericQueryNames");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.genericQueryNames"
    });
  }
});

// GET /api/v1/ble/analytics/macsForSite  ->  sdk.api.bleAnalyticsResource.macsForSite(...) [from opId="macsForSite"]
generatedRoutes.get("/api/v1/ble/analytics/macsForSite", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["start","finish","locations","tags","excludeTags","macs","searchMacWithValue"]);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "macsForSite";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "macsForSite");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: macsForSite");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.macsForSite"
    });
  }
});

// GET /api/v1/ble/analytics/sessions/{mac}  ->  sdk.api.bleAnalyticsResource.deviceHistory(...) [from opId="deviceHistory"]
generatedRoutes.get("/api/v1/ble/analytics/sessions/:mac", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["mac"], ["minimumDurationFilterInMillis","limit","locations","start","finish","mergeAdjSessionsIfDiffInMinutesLE"]);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "deviceHistory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deviceHistory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deviceHistory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.deviceHistory"
    });
  }
});

// GET /api/v1/ble/analytics/timeline  ->  sdk.api.bleAnalyticsResource.bleTimeline(...) [from opId="bleTimeline"]
generatedRoutes.get("/api/v1/ble/analytics/timeline", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["macAddresses","start","finish","locations","useAggregatedData"]);
    const service = (sdk.api as any)["bleAnalyticsResource"];
    let methodName = "bleTimeline";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "bleTimeline");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: bleTimeline");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bleAnalyticsResource.bleTimeline"
    });
  }
});

// POST /api/v1/booking  ->  sdk.api.bookingResource.createOrModify(...) [from opId="createOrModify"]
generatedRoutes.post("/api/v1/booking", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "createOrModify";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "createOrModify");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: createOrModify");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.createOrModify"
    });
  }
});

// POST /api/v1/booking/checkout  ->  sdk.api.bookingResource.checkoutBooking(...) [from opId="checkoutBooking"]
generatedRoutes.post("/api/v1/booking/checkout", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "checkoutBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkoutBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkoutBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.checkoutBooking"
    });
  }
});

// POST /api/v1/booking/claim  ->  sdk.api.bookingResource.checkinBooking(...) [from opId="checkinBooking"]
generatedRoutes.post("/api/v1/booking/claim", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "checkinBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkinBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkinBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.checkinBooking"
    });
  }
});

// POST /api/v1/booking/current  ->  sdk.api.bookingResource.getCurrentBookingsForUsers(...) [from opId="getCurrentBookingsForUsers"]
generatedRoutes.post("/api/v1/booking/current", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["timestamp","key"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getCurrentBookingsForUsers";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getCurrentBookingsForUsers");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getCurrentBookingsForUsers");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getCurrentBookingsForUsers"
    });
  }
});

// POST /api/v1/booking/delegated  ->  sdk.api.bookingResource.createOrModifyDelegated(...) [from opId="createOrModifyDelegated"]
generatedRoutes.post("/api/v1/booking/delegated", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "createOrModifyDelegated";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "createOrModifyDelegated");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: createOrModifyDelegated");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.createOrModifyDelegated"
    });
  }
});

// GET /api/v1/booking/delegatee  ->  sdk.api.bookingResource.getForDelegatee1(...) [from opId="getForDelegatee_1"]
generatedRoutes.get("/api/v1/booking/delegatee", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["from","to","virtual"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getForDelegatee1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getForDelegatee_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getForDelegatee_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getForDelegatee1"
    });
  }
});

// POST /api/v1/booking/delegatee/modify  ->  sdk.api.bookingResource.modifyDelegateBookingOfSeries(...) [from opId="modifyDelegateBookingOfSeries"]
generatedRoutes.post("/api/v1/booking/delegatee/modify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "modifyDelegateBookingOfSeries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "modifyDelegateBookingOfSeries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: modifyDelegateBookingOfSeries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.modifyDelegateBookingOfSeries"
    });
  }
});

// GET /api/v1/booking/delegatee/pageable  ->  sdk.api.bookingResource.getForDelegatee(...) [from opId="getForDelegatee"]
generatedRoutes.get("/api/v1/booking/delegatee/pageable", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","from","to","virtual"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getForDelegatee";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getForDelegatee");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getForDelegatee");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getForDelegatee"
    });
  }
});

// DELETE /api/v1/booking/deleteFuture/{id}/{subid}  ->  sdk.api.bookingResource.deleteFutureBookingInSeries(...) [from opId="deleteFutureBookingInSeries"]
generatedRoutes.delete("/api/v1/booking/deleteFuture/:id/:subid", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id","subid"], ["hard"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "deleteFutureBookingInSeries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteFutureBookingInSeries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteFutureBookingInSeries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.deleteFutureBookingInSeries"
    });
  }
});

// POST /api/v1/booking/directreports  ->  sdk.api.bookingResource.getDirectReports(...) [from opId="getDirectReports"]
generatedRoutes.post("/api/v1/booking/directreports", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getDirectReports";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getDirectReports");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getDirectReports");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getDirectReports"
    });
  }
});

// POST /api/v1/booking/extend  ->  sdk.api.bookingResource.extendBooking(...) [from opId="extendBooking"]
generatedRoutes.post("/api/v1/booking/extend", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "extendBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "extendBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: extendBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.extendBooking"
    });
  }
});

// GET /api/v1/booking/infospot/{infospotId}  ->  sdk.api.bookingResource.getInfospotBookings(...) [from opId="getInfospotBookings"]
generatedRoutes.get("/api/v1/booking/infospot/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], ["from","to"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getInfospotBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getInfospotBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getInfospotBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getInfospotBookings"
    });
  }
});

// POST /api/v1/booking/issue  ->  sdk.api.bookingResource.raiseIssueOnBooking(...) [from opId="raiseIssueOnBooking"]
generatedRoutes.post("/api/v1/booking/issue", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "raiseIssueOnBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "raiseIssueOnBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: raiseIssueOnBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.raiseIssueOnBooking"
    });
  }
});

// GET /api/v1/booking/location/{id}  ->  sdk.api.bookingResource.getForLocation(...) [from opId="getForLocation"]
generatedRoutes.get("/api/v1/booking/location/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["at","from","to","includeReleased","virtual"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getForLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getForLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getForLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getForLocation"
    });
  }
});

// POST /api/v1/booking/location/{id}  ->  sdk.api.bookingResource.getForLocationAndSchedule(...) [from opId="getForLocationAndSchedule"]
generatedRoutes.post("/api/v1/booking/location/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], ["includeReleased"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getForLocationAndSchedule";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getForLocationAndSchedule");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getForLocationAndSchedule");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getForLocationAndSchedule"
    });
  }
});

// POST /api/v1/booking/modify  ->  sdk.api.bookingResource.modifyBooking(...) [from opId="modifyBooking"]
generatedRoutes.post("/api/v1/booking/modify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "modifyBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "modifyBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: modifyBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.modifyBooking"
    });
  }
});

// GET /api/v1/booking/re-enable  ->  sdk.api.bookingResource.reEnableReleasedBooking(...) [from opId="reEnableReleasedBooking"]
generatedRoutes.get("/api/v1/booking/re-enable", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["id","subId"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "reEnableReleasedBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "reEnableReleasedBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: reEnableReleasedBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.reEnableReleasedBooking"
    });
  }
});

// POST /api/v1/booking/share  ->  sdk.api.bookingResource.shareBooking(...) [from opId="shareBooking"]
generatedRoutes.post("/api/v1/booking/share", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["email"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "shareBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "shareBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: shareBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.shareBooking"
    });
  }
});

// GET /api/v1/booking/user/pageable/{login}  ->  sdk.api.bookingResource.getPagesForUser(...) [from opId="getPagesForUser"]
generatedRoutes.get("/api/v1/booking/user/pageable/:login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["login"], ["pageable","from","to","virtual"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getPagesForUser";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getPagesForUser");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getPagesForUser");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getPagesForUser"
    });
  }
});

// GET /api/v1/booking/user/{login}  ->  sdk.api.bookingResource.getForUser(...) [from opId="getForUser"]
generatedRoutes.get("/api/v1/booking/user/:login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["login"], ["from","to","virtual","confirmedBookings"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getForUser";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getForUser");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getForUser");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getForUser"
    });
  }
});

// POST /api/v1/booking/usercircle  ->  sdk.api.bookingResource.getUserCircleBookings(...) [from opId="getUserCircleBookings"]
generatedRoutes.post("/api/v1/booking/usercircle", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["userIds","from","to"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getUserCircleBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserCircleBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserCircleBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getUserCircleBookings"
    });
  }
});

// GET /api/v1/booking/zone/{id}  ->  sdk.api.bookingResource.getZoneBookings(...) [from opId="getZoneBookings"]
generatedRoutes.get("/api/v1/booking/zone/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["from","to"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getZoneBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getZoneBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getZoneBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getZoneBookings"
    });
  }
});

// DELETE /api/v1/booking/{id}  ->  sdk.api.bookingResource.deleteOneSeries(...) [from opId="deleteOneSeries"]
generatedRoutes.delete("/api/v1/booking/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["hard"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "deleteOneSeries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteOneSeries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteOneSeries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.deleteOneSeries"
    });
  }
});

// GET /api/v1/booking/{id}  ->  sdk.api.bookingResource.getOne(...) [from opId="getOne"]
generatedRoutes.get("/api/v1/booking/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "getOne";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOne");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOne");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.getOne"
    });
  }
});

// DELETE /api/v1/booking/{id}/{subid}  ->  sdk.api.bookingResource.deleteOne(...) [from opId="deleteOne"]
generatedRoutes.delete("/api/v1/booking/:id/:subid", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id","subid"], ["hard"]);
    const service = (sdk.api as any)["bookingResource"];
    let methodName = "deleteOne";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteOne");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteOne");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "bookingResource.deleteOne"
    });
  }
});

// GET /api/v1/camera-status  ->  sdk.api.networkElementWifiBleCameraAirQualityMonitoringAPIS.getCameraStatus(...) [from opId="getCameraStatus"]
generatedRoutes.get("/api/v1/camera-status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["networkElementWifiBleCameraAirQualityMonitoringAPIS"];
    let methodName = "getCameraStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getCameraStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getCameraStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "networkElementWifiBleCameraAirQualityMonitoringAPIS.getCameraStatus"
    });
  }
});

// POST /api/v1/camera/analytics/distribution  ->  sdk.api.cameraAnalyticsQueries.distributionQuery2(...) [from opId="distributionQuery_2"]
generatedRoutes.post("/api/v1/camera/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "distributionQuery2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQuery_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQuery_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.distributionQuery2"
    });
  }
});

// POST /api/v1/camera/analytics/dwell  ->  sdk.api.cameraAnalyticsQueries.cameraDwell(...) [from opId="cameraDwell"]
generatedRoutes.post("/api/v1/camera/analytics/dwell", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "cameraDwell";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "cameraDwell");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: cameraDwell");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.cameraDwell"
    });
  }
});

// POST /api/v1/camera/analytics/dwellDistribution  ->  sdk.api.cameraAnalyticsQueries.dwellDistribution(...) [from opId="dwellDistribution"]
generatedRoutes.post("/api/v1/camera/analytics/dwellDistribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "dwellDistribution";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "dwellDistribution");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: dwellDistribution");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.dwellDistribution"
    });
  }
});

// POST /api/v1/camera/analytics/entityDemographics  ->  sdk.api.cameraAnalyticsQueries.entityDemographics(...) [from opId="entityDemographics"]
generatedRoutes.post("/api/v1/camera/analytics/entityDemographics", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pageable"]);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "entityDemographics";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "entityDemographics");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: entityDemographics");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.entityDemographics"
    });
  }
});

// POST /api/v1/camera/analytics/entitySessions  ->  sdk.api.cameraAnalyticsQueries.getEntitySessions(...) [from opId="getEntitySessions"]
generatedRoutes.post("/api/v1/camera/analytics/entitySessions", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pageable"]);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "getEntitySessions";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getEntitySessions");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getEntitySessions");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.getEntitySessions"
    });
  }
});

// POST /api/v1/camera/analytics/entryExit  ->  sdk.api.cameraAnalyticsQueries.getEntryExitTimeseries(...) [from opId="getEntryExitTimeseries"]
generatedRoutes.post("/api/v1/camera/analytics/entryExit", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pageable"]);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "getEntryExitTimeseries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getEntryExitTimeseries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getEntryExitTimeseries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.getEntryExitTimeseries"
    });
  }
});

// POST /api/v1/camera/analytics/maxDwellTime  ->  sdk.api.cameraAnalyticsQueries.maxDwellTimeQuery(...) [from opId="maxDwellTimeQuery"]
generatedRoutes.post("/api/v1/camera/analytics/maxDwellTime", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "maxDwellTimeQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "maxDwellTimeQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: maxDwellTimeQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.maxDwellTimeQuery"
    });
  }
});

// POST /api/v1/camera/analytics/movementTree  ->  sdk.api.cameraAnalyticsQueries.movementTreeV4(...) [from opId="movementTreeV4"]
generatedRoutes.post("/api/v1/camera/analytics/movementTree", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "movementTreeV4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "movementTreeV4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: movementTreeV4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.movementTreeV4"
    });
  }
});

// POST /api/v1/camera/analytics/movements  ->  sdk.api.cameraAnalyticsQueries.clientMovements(...) [from opId="clientMovements"]
generatedRoutes.post("/api/v1/camera/analytics/movements", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "clientMovements";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "clientMovements");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: clientMovements");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.clientMovements"
    });
  }
});

// POST /api/v1/camera/analytics/pairwiseMovement  ->  sdk.api.cameraAnalyticsQueries.pairwiseMovementV4(...) [from opId="pairwiseMovementV4"]
generatedRoutes.post("/api/v1/camera/analytics/pairwiseMovement", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["cameraAnalyticsQueries"];
    let methodName = "pairwiseMovementV4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "pairwiseMovementV4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: pairwiseMovementV4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraAnalyticsQueries.pairwiseMovementV4"
    });
  }
});

// DELETE /api/v1/cateringservice  ->  sdk.api.employeeCatering.delete7(...) [from opId="delete_7"]
generatedRoutes.delete("/api/v1/cateringservice", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "delete7";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_7");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_7");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.delete7"
    });
  }
});

// POST /api/v1/cateringservice  ->  sdk.api.employeeCatering.create5(...) [from opId="create_5"]
generatedRoutes.post("/api/v1/cateringservice", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "create5";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create_5");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create_5");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.create5"
    });
  }
});

// PUT /api/v1/cateringservice  ->  sdk.api.employeeCatering.update2(...) [from opId="update_2"]
generatedRoutes.put("/api/v1/cateringservice", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "update2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "update_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: update_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.update2"
    });
  }
});

// GET /api/v1/cateringservice/category  ->  sdk.api.employeeCatering.getAllCategories(...) [from opId="getAllCategories"]
generatedRoutes.get("/api/v1/cateringservice/category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getAllCategories";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllCategories");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllCategories");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getAllCategories"
    });
  }
});

// POST /api/v1/cateringservice/category  ->  sdk.api.employeeCatering.saveCategories(...) [from opId="saveCategories"]
generatedRoutes.post("/api/v1/cateringservice/category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "saveCategories";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveCategories");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveCategories");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.saveCategories"
    });
  }
});

// PUT /api/v1/cateringservice/category  ->  sdk.api.employeeCatering.updateCategory(...) [from opId="updateCategory"]
generatedRoutes.put("/api/v1/cateringservice/category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateCategory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateCategory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateCategory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateCategory"
    });
  }
});

// PATCH /api/v1/cateringservice/category/activeState/{id}  ->  sdk.api.employeeCatering.updateCategoryActiveField(...) [from opId="updateCategoryActiveField"]
generatedRoutes.patch("/api/v1/cateringservice/category/activeState/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["active"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateCategoryActiveField";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateCategoryActiveField");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateCategoryActiveField");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateCategoryActiveField"
    });
  }
});

// DELETE /api/v1/cateringservice/category/delete/{id}  ->  sdk.api.employeeCatering.deleteCategories(...) [from opId="deleteCategories"]
generatedRoutes.delete("/api/v1/cateringservice/category/delete/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "deleteCategories";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteCategories");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteCategories");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.deleteCategories"
    });
  }
});

// GET /api/v1/cateringservice/category/name/{name}  ->  sdk.api.employeeCatering.getCategoryByName(...) [from opId="getCategoryByName"]
generatedRoutes.get("/api/v1/cateringservice/category/name/:name", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["name"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getCategoryByName";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getCategoryByName");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getCategoryByName");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getCategoryByName"
    });
  }
});

// PATCH /api/v1/cateringservice/category/updateImageId/{id}  ->  sdk.api.employeeCatering.updateCatergoryImageId(...) [from opId="updateCatergoryImageId"]
generatedRoutes.patch("/api/v1/cateringservice/category/updateImageId/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["imageId"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateCatergoryImageId";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateCatergoryImageId");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateCatergoryImageId");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateCatergoryImageId"
    });
  }
});

// GET /api/v1/cateringservice/category/{id}  ->  sdk.api.employeeCatering.getCategoryById(...) [from opId="getCategoryById"]
generatedRoutes.get("/api/v1/cateringservice/category/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getCategoryById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getCategoryById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getCategoryById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getCategoryById"
    });
  }
});

// PATCH /api/v1/cateringservice/item/activeState/{id}  ->  sdk.api.employeeCatering.updateItemActiveField(...) [from opId="updateItemActiveField"]
generatedRoutes.patch("/api/v1/cateringservice/item/activeState/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["active"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateItemActiveField";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateItemActiveField");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateItemActiveField");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateItemActiveField"
    });
  }
});

// PATCH /api/v1/cateringservice/item/updateImageId/{id}  ->  sdk.api.employeeCatering.updateItemImageId(...) [from opId="updateItemImageId"]
generatedRoutes.patch("/api/v1/cateringservice/item/updateImageId/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["imageId"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateItemImageId";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateItemImageId");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateItemImageId");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateItemImageId"
    });
  }
});

// POST /api/v1/cateringservice/items  ->  sdk.api.employeeCatering.getAll(...) [from opId="getAll"]
generatedRoutes.post("/api/v1/cateringservice/items", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["name","pageable"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getAll";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getAll"
    });
  }
});

// POST /api/v1/cateringservice/orders  ->  sdk.api.employeeCatering.save6(...) [from opId="save_6"]
generatedRoutes.post("/api/v1/cateringservice/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["id"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "save6";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_6");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_6");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.save6"
    });
  }
});

// DELETE /api/v1/cateringservice/orders/delete/{id}  ->  sdk.api.employeeCatering.deleteOrder1(...) [from opId="deleteOrder_1"]
generatedRoutes.delete("/api/v1/cateringservice/orders/delete/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "deleteOrder1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteOrder_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteOrder_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.deleteOrder1"
    });
  }
});

// POST /api/v1/cateringservice/orders/drafts  ->  sdk.api.employeeCatering.saveDrafts(...) [from opId="saveDrafts"]
generatedRoutes.post("/api/v1/cateringservice/orders/drafts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "saveDrafts";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveDrafts");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveDrafts");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.saveDrafts"
    });
  }
});

// POST /api/v1/cateringservice/orders/getAll  ->  sdk.api.employeeCatering.getOrders(...) [from opId="getOrders"]
generatedRoutes.post("/api/v1/cateringservice/orders/getAll", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["includeDraftOrders","pageable"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getOrders";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOrders");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOrders");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getOrders"
    });
  }
});

// GET /api/v1/cateringservice/orders/status  ->  sdk.api.employeeCatering.findByStatus1(...) [from opId="findByStatus_1"]
generatedRoutes.get("/api/v1/cateringservice/orders/status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["status"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "findByStatus1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findByStatus_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findByStatus_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.findByStatus1"
    });
  }
});

// PATCH /api/v1/cateringservice/orders/update/{id}  ->  sdk.api.employeeCatering.updateByStatus1(...) [from opId="updateByStatus_1"]
generatedRoutes.patch("/api/v1/cateringservice/orders/update/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["status","cancellationReason"]);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "updateByStatus1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateByStatus_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateByStatus_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.updateByStatus1"
    });
  }
});

// GET /api/v1/cateringservice/orders/user/{email}  ->  sdk.api.employeeCatering.getOrderByEmail1(...) [from opId="getOrderByEmail_1"]
generatedRoutes.get("/api/v1/cateringservice/orders/user/:email", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["email"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getOrderByEmail1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOrderByEmail_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOrderByEmail_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getOrderByEmail1"
    });
  }
});

// GET /api/v1/cateringservice/orders/{id}  ->  sdk.api.employeeCatering.findById1(...) [from opId="findById_1"]
generatedRoutes.get("/api/v1/cateringservice/orders/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "findById1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findById_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findById_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.findById1"
    });
  }
});

// DELETE /api/v1/cateringservice/{id}  ->  sdk.api.employeeCatering.deleteById(...) [from opId="deleteById"]
generatedRoutes.delete("/api/v1/cateringservice/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "deleteById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.deleteById"
    });
  }
});

// GET /api/v1/cateringservice/{id}  ->  sdk.api.employeeCatering.getById(...) [from opId="getById"]
generatedRoutes.get("/api/v1/cateringservice/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["employeeCatering"];
    let methodName = "getById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "employeeCatering.getById"
    });
  }
});

// GET /api/v1/data/schema/current/{indexName}  ->  sdk.api.elasticsearchSchemaManagement.getCurrentSchema(...) [from opId="getCurrentSchema"]
generatedRoutes.get("/api/v1/data/schema/current/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["indexName"], ["verbose"]);
    const service = (sdk.api as any)["elasticsearchSchemaManagement"];
    let methodName = "getCurrentSchema";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getCurrentSchema");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getCurrentSchema");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchSchemaManagement.getCurrentSchema"
    });
  }
});

// DELETE /api/v1/data/schema/{indexName}  ->  sdk.api.elasticsearchSchemaManagement.deleteDataStore(...) [from opId="deleteDataStore"]
generatedRoutes.delete("/api/v1/data/schema/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchSchemaManagement"];
    let methodName = "deleteDataStore";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteDataStore");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteDataStore");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchSchemaManagement.deleteDataStore"
    });
  }
});

// GET /api/v1/data/schema/{indexName}  ->  sdk.api.elasticsearchSchemaManagement.getAllSchemaUpdates(...) [from opId="getAllSchemaUpdates"]
generatedRoutes.get("/api/v1/data/schema/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["indexName"], ["page","size","sort"]);
    const service = (sdk.api as any)["elasticsearchSchemaManagement"];
    let methodName = "getAllSchemaUpdates";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllSchemaUpdates");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllSchemaUpdates");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchSchemaManagement.getAllSchemaUpdates"
    });
  }
});

// POST /api/v1/data/schema/{indexName}  ->  sdk.api.elasticsearchSchemaManagement.createDataStore(...) [from opId="createDataStore"]
generatedRoutes.post("/api/v1/data/schema/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchSchemaManagement"];
    let methodName = "createDataStore";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "createDataStore");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: createDataStore");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchSchemaManagement.createDataStore"
    });
  }
});

// PUT /api/v1/data/schema/{indexName}  ->  sdk.api.elasticsearchSchemaManagement.updateSchema(...) [from opId="updateSchema"]
generatedRoutes.put("/api/v1/data/schema/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchSchemaManagement"];
    let methodName = "updateSchema";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateSchema");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateSchema");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchSchemaManagement.updateSchema"
    });
  }
});

// GET /api/v1/data/search/{indexName}  ->  sdk.api.elasticsearchDataManagement.searchWithParams(...) [from opId="searchWithParams"]
generatedRoutes.get("/api/v1/data/search/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "searchWithParams";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchWithParams");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchWithParams");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.searchWithParams"
    });
  }
});

// POST /api/v1/data/search/{indexName}  ->  sdk.api.elasticsearchDataManagement.searchWithQuery(...) [from opId="searchWithQuery"]
generatedRoutes.post("/api/v1/data/search/:indexName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "searchWithQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchWithQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchWithQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.searchWithQuery"
    });
  }
});

// POST /api/v1/data/{indexName}/delete_by_query  ->  sdk.api.elasticsearchDataManagement.deleteByQuery(...) [from opId="deleteByQuery"]
generatedRoutes.post("/api/v1/data/:indexName/delete_by_query", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "deleteByQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteByQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteByQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.deleteByQuery"
    });
  }
});

// POST /api/v1/data/{indexName}/insert  ->  sdk.api.elasticsearchDataManagement.addDocumentWithoutID(...) [from opId="addDocumentWithoutID"]
generatedRoutes.post("/api/v1/data/:indexName/insert", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "addDocumentWithoutID";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "addDocumentWithoutID");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: addDocumentWithoutID");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.addDocumentWithoutID"
    });
  }
});

// POST /api/v1/data/{indexName}/update/{id}  ->  sdk.api.elasticsearchDataManagement.updateDocumentById(...) [from opId="updateDocumentById"]
generatedRoutes.post("/api/v1/data/:indexName/update/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName","id"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "updateDocumentById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateDocumentById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateDocumentById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.updateDocumentById"
    });
  }
});

// POST /api/v1/data/{indexName}/updateByQuery  ->  sdk.api.elasticsearchDataManagement.updateDocumentByQuery(...) [from opId="updateDocumentByQuery"]
generatedRoutes.post("/api/v1/data/:indexName/updateByQuery", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["indexName"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "updateDocumentByQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateDocumentByQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateDocumentByQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.updateDocumentByQuery"
    });
  }
});

// DELETE /api/v1/data/{indexName}/{id}  ->  sdk.api.elasticsearchDataManagement.deleteDocument(...) [from opId="deleteDocument"]
generatedRoutes.delete("/api/v1/data/:indexName/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["indexName","id"], []);
    const service = (sdk.api as any)["elasticsearchDataManagement"];
    let methodName = "deleteDocument";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteDocument");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteDocument");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "elasticsearchDataManagement.deleteDocument"
    });
  }
});

// GET /api/v1/device/analytics/history  ->  sdk.api.deviceAnalyticsResource.navigationHistory(...) [from opId="navigationHistory"]
generatedRoutes.get("/api/v1/device/analytics/history", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["macAddress","deviceType","start","finish","fields"]);
    const service = (sdk.api as any)["deviceAnalyticsResource"];
    let methodName = "navigationHistory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "navigationHistory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: navigationHistory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "deviceAnalyticsResource.navigationHistory"
    });
  }
});

// GET /api/v1/device/analytics/locate  ->  sdk.api.deviceAnalyticsResource.locateDevice(...) [from opId="locateDevice"]
generatedRoutes.get("/api/v1/device/analytics/locate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["macAddress","deviceType"]);
    const service = (sdk.api as any)["deviceAnalyticsResource"];
    let methodName = "locateDevice";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "locateDevice");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: locateDevice");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "deviceAnalyticsResource.locateDevice"
    });
  }
});

// POST /api/v1/device/analytics/navigate  ->  sdk.api.deviceAnalyticsResource.navigateToLocation1(...) [from opId="navigateToLocation_1"]
generatedRoutes.post("/api/v1/device/analytics/navigate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["deviceAnalyticsResource"];
    let methodName = "navigateToLocation1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "navigateToLocation_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: navigateToLocation_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "deviceAnalyticsResource.navigateToLocation1"
    });
  }
});

// POST /api/v1/device/analytics/navigateToZone  ->  sdk.api.deviceAnalyticsResource.navigateToLocation(...) [from opId="navigateToLocation"]
generatedRoutes.post("/api/v1/device/analytics/navigateToZone", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["deviceAnalyticsResource"];
    let methodName = "navigateToLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "navigateToLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: navigateToLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "deviceAnalyticsResource.navigateToLocation"
    });
  }
});

// GET /api/v1/device/analytics/searchPOI  ->  sdk.api.deviceAnalyticsResource.searchPOI(...) [from opId="searchPOI"]
generatedRoutes.get("/api/v1/device/analytics/searchPOI", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["macAddress","deviceType","keyword","locations","pageable"]);
    const service = (sdk.api as any)["deviceAnalyticsResource"];
    let methodName = "searchPOI";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchPOI");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchPOI");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "deviceAnalyticsResource.searchPOI"
    });
  }
});

// DELETE /api/v1/devices  ->  sdk.api.clientDeviceResource.deleteAll2(...) [from opId="deleteAll_2"]
generatedRoutes.delete("/api/v1/devices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "deleteAll2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteAll_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteAll_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.deleteAll2"
    });
  }
});

// GET /api/v1/devices  ->  sdk.api.clientDeviceResource.getAll5(...) [from opId="getAll_5"]
generatedRoutes.get("/api/v1/devices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["mac","keyword","tags","excludeTags","withSocialProfile","pageable"]);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "getAll5";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_5");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_5");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.getAll5"
    });
  }
});

// POST /api/v1/devices  ->  sdk.api.clientDeviceResource.create4(...) [from opId="create_4"]
generatedRoutes.post("/api/v1/devices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "create4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.create4"
    });
  }
});

// PUT /api/v1/devices  ->  sdk.api.clientDeviceResource.save2(...) [from opId="save_2"]
generatedRoutes.put("/api/v1/devices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "save2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.save2"
    });
  }
});

// POST /api/v1/devices/bulk  ->  sdk.api.clientDeviceResource.bulkLoad(...) [from opId="bulkLoad"]
generatedRoutes.post("/api/v1/devices/bulk", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["clear"]);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "bulkLoad";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "bulkLoad");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: bulkLoad");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.bulkLoad"
    });
  }
});

// GET /api/v1/devices/csv-export  ->  sdk.api.clientDeviceResource.exportCSV(...) [from opId="exportCSV"]
generatedRoutes.get("/api/v1/devices/csv-export", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "exportCSV";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "exportCSV");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: exportCSV");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.exportCSV"
    });
  }
});

// POST /api/v1/devices/csv-import  ->  sdk.api.clientDeviceResource.importCsv(...) [from opId="importCsv"]
generatedRoutes.post("/api/v1/devices/csv-import", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["csvURL"]);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "importCsv";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "importCsv");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: importCsv");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.importCsv"
    });
  }
});

// POST /api/v1/devices/email  ->  sdk.api.clientDeviceResource.clientEmail(...) [from opId="clientEmail"]
generatedRoutes.post("/api/v1/devices/email", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "clientEmail";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "clientEmail");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: clientEmail");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.clientEmail"
    });
  }
});

// POST /api/v1/devices/ezLinkCSVImport  ->  sdk.api.clientDeviceResource.ezLinkCSVImport(...) [from opId="ezLinkCSVImport"]
generatedRoutes.post("/api/v1/devices/ezLinkCSVImport", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["csvURL"]);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "ezLinkCSVImport";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "ezLinkCSVImport");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: ezLinkCSVImport");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.ezLinkCSVImport"
    });
  }
});

// DELETE /api/v1/devices/history/{id}  ->  sdk.api.clientDeviceResource.deleteHistory(...) [from opId="deleteHistory"]
generatedRoutes.delete("/api/v1/devices/history/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "deleteHistory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteHistory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteHistory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.deleteHistory"
    });
  }
});

// GET /api/v1/devices/identified  ->  sdk.api.clientDeviceResource.getIdentified(...) [from opId="getIdentified"]
generatedRoutes.get("/api/v1/devices/identified", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "getIdentified";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getIdentified");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getIdentified");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.getIdentified"
    });
  }
});

// GET /api/v1/devices/oui  ->  sdk.api.clientDeviceResource.getOui(...) [from opId="getOui"]
generatedRoutes.get("/api/v1/devices/oui", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["oui"]);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "getOui";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOui");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOui");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.getOui"
    });
  }
});

// GET /api/v1/devices/tags  ->  sdk.api.clientDeviceResource.getTags(...) [from opId="getTags"]
generatedRoutes.get("/api/v1/devices/tags", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "getTags";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTags");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTags");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.getTags"
    });
  }
});

// DELETE /api/v1/devices/{id}  ->  sdk.api.clientDeviceResource.delete6(...) [from opId="delete_6"]
generatedRoutes.delete("/api/v1/devices/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "delete6";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_6");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_6");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.delete6"
    });
  }
});

// GET /api/v1/devices/{id}  ->  sdk.api.clientDeviceResource.get5(...) [from opId="get_5"]
generatedRoutes.get("/api/v1/devices/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["clientDeviceResource"];
    let methodName = "get5";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get_5");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get_5");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "clientDeviceResource.get5"
    });
  }
});

// POST /api/v1/flightSchedule/flights/csv  ->  sdk.api.flightScheduleResource.uploadFlightsDetails(...) [from opId="uploadFlightsDetails"]
generatedRoutes.post("/api/v1/flightSchedule/flights/csv", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["file","tz"]);
    const service = (sdk.api as any)["flightScheduleResource"];
    let methodName = "uploadFlightsDetails";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "uploadFlightsDetails");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: uploadFlightsDetails");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "flightScheduleResource.uploadFlightsDetails"
    });
  }
});

// GET /api/v1/flightSchedule/flights/getAllSchedule  ->  sdk.api.flightScheduleResource.getAllSchedule1(...) [from opId="getAllSchedule_1"]
generatedRoutes.get("/api/v1/flightSchedule/flights/getAllSchedule", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable"]);
    const service = (sdk.api as any)["flightScheduleResource"];
    let methodName = "getAllSchedule1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllSchedule_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllSchedule_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "flightScheduleResource.getAllSchedule1"
    });
  }
});

// GET /api/v1/flightSchedule/flights/getScheduleBetween  ->  sdk.api.flightScheduleResource.getAllSchedule(...) [from opId="getAllSchedule"]
generatedRoutes.get("/api/v1/flightSchedule/flights/getScheduleBetween", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["from","to"]);
    const service = (sdk.api as any)["flightScheduleResource"];
    let methodName = "getAllSchedule";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllSchedule");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllSchedule");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "flightScheduleResource.getAllSchedule"
    });
  }
});

// GET /api/v1/floor/{floorId}/export/boundaries  ->  sdk.api.locationGeoJsonConfiguration.exportFloorZoneBoundaries(...) [from opId="exportFloorZoneBoundaries"]
generatedRoutes.get("/api/v1/floor/:floorId/export/boundaries", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["floorId"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "exportFloorZoneBoundaries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "exportFloorZoneBoundaries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: exportFloorZoneBoundaries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.exportFloorZoneBoundaries"
    });
  }
});

// GET /api/v1/floor/{floorId}/export/pois  ->  sdk.api.locationGeoJsonConfiguration.exportFloorPOIs(...) [from opId="exportFloorPOIs"]
generatedRoutes.get("/api/v1/floor/:floorId/export/pois", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["floorId"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "exportFloorPOIs";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "exportFloorPOIs");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: exportFloorPOIs");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.exportFloorPOIs"
    });
  }
});

// POST /api/v1/floor/{floorId}/import/boundaries  ->  sdk.api.locationGeoJsonConfiguration.importFloorZoneBoundaries(...) [from opId="importFloorZoneBoundaries"]
generatedRoutes.post("/api/v1/floor/:floorId/import/boundaries", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["floorId"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "importFloorZoneBoundaries";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "importFloorZoneBoundaries");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: importFloorZoneBoundaries");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.importFloorZoneBoundaries"
    });
  }
});

// POST /api/v1/floor/{floorId}/import/pois  ->  sdk.api.locationGeoJsonConfiguration.importFloorPOIs(...) [from opId="importFloorPOIs"]
generatedRoutes.post("/api/v1/floor/:floorId/import/pois", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["floorId"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "importFloorPOIs";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "importFloorPOIs");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: importFloorPOIs");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.importFloorPOIs"
    });
  }
});

// GET /api/v1/floor/{id}/boundaries  ->  sdk.api.locationGeoJsonConfiguration.getBoundariesForFloorZones(...) [from opId="getBoundariesForFloorZones"]
generatedRoutes.get("/api/v1/floor/:id/boundaries", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getBoundariesForFloorZones";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getBoundariesForFloorZones");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getBoundariesForFloorZones");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getBoundariesForFloorZones"
    });
  }
});

// POST /api/v1/floor/{id}/boundaries  ->  sdk.api.locationGeoJsonConfiguration.uploadFloorZones(...) [from opId="uploadFloorZones"]
generatedRoutes.post("/api/v1/floor/:id/boundaries", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "uploadFloorZones";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "uploadFloorZones");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: uploadFloorZones");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.uploadFloorZones"
    });
  }
});

// GET /api/v1/floor/{id}/boundaries/geojson/features  ->  sdk.api.locationGeoJsonConfiguration.getBoundariesFeatureForFloorZones(...) [from opId="getBoundariesFeatureForFloorZones"]
generatedRoutes.get("/api/v1/floor/:id/boundaries/geojson/features", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getBoundariesFeatureForFloorZones";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getBoundariesFeatureForFloorZones");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getBoundariesFeatureForFloorZones");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getBoundariesFeatureForFloorZones"
    });
  }
});

// GET /api/v1/floor/{id}/export/navigationPath  ->  sdk.api.locationGeoJsonConfiguration.exportFloorNavPath(...) [from opId="exportFloorNavPath"]
generatedRoutes.get("/api/v1/floor/:id/export/navigationPath", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "exportFloorNavPath";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "exportFloorNavPath");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: exportFloorNavPath");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.exportFloorNavPath"
    });
  }
});

// POST /api/v1/floor/{id}/import/navigationPath  ->  sdk.api.locationGeoJsonConfiguration.importFloorNavPath(...) [from opId="importFloorNavPath"]
generatedRoutes.post("/api/v1/floor/:id/import/navigationPath", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "importFloorNavPath";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "importFloorNavPath");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: importFloorNavPath");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.importFloorNavPath"
    });
  }
});

// GET /api/v1/floor/{id}/navigationPath  ->  sdk.api.locationGeoJsonConfiguration.getFloorNavigationPath(...) [from opId="getFloorNavigationPath"]
generatedRoutes.get("/api/v1/floor/:id/navigationPath", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getFloorNavigationPath";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFloorNavigationPath");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFloorNavigationPath");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getFloorNavigationPath"
    });
  }
});

// GET /api/v1/floor/{id}/pathGraph  ->  sdk.api.locationGeoJsonConfiguration.getFloorPathGraph(...) [from opId="getFloorPathGraph"]
generatedRoutes.get("/api/v1/floor/:id/pathGraph", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getFloorPathGraph";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFloorPathGraph");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFloorPathGraph");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getFloorPathGraph"
    });
  }
});

// PUT /api/v1/floor/{id}/pathGraph  ->  sdk.api.locationGeoJsonConfiguration.savePathGraph(...) [from opId="savePathGraph"]
generatedRoutes.put("/api/v1/floor/:id/pathGraph", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "savePathGraph";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "savePathGraph");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: savePathGraph");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.savePathGraph"
    });
  }
});

// DELETE /api/v1/humans  ->  sdk.api.human.deleteAll1(...) [from opId="deleteAll_1"]
generatedRoutes.delete("/api/v1/humans", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "deleteAll1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteAll_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteAll_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.deleteAll1"
    });
  }
});

// PUT /api/v1/humans  ->  sdk.api.human.save1(...) [from opId="save_1"]
generatedRoutes.put("/api/v1/humans", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "save1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.save1"
    });
  }
});

// GET /api/v1/humans/allHumanImages  ->  sdk.api.human.downloadAllHumanImages(...) [from opId="downloadAllHumanImages"]
generatedRoutes.get("/api/v1/humans/allHumanImages", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "downloadAllHumanImages";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "downloadAllHumanImages");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: downloadAllHumanImages");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.downloadAllHumanImages"
    });
  }
});

// PUT /api/v1/humans/bulkStatusUpdate  ->  sdk.api.human.updateRegistrationStatus(...) [from opId="updateRegistrationStatus"]
generatedRoutes.put("/api/v1/humans/bulkStatusUpdate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["currentStatus","updatedStatus","uniqueIds"]);
    const service = (sdk.api as any)["human"];
    let methodName = "updateRegistrationStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateRegistrationStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateRegistrationStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.updateRegistrationStatus"
    });
  }
});

// DELETE /api/v1/humans/delete  ->  sdk.api.human.delete5(...) [from opId="delete_5"]
generatedRoutes.delete("/api/v1/humans/delete", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["identity"]);
    const service = (sdk.api as any)["human"];
    let methodName = "delete5";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_5");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_5");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.delete5"
    });
  }
});

// GET /api/v1/humans/findByUniqueId/{uniqueId}  ->  sdk.api.human.getHumanByEntityId(...) [from opId="getHumanByEntityId"]
generatedRoutes.get("/api/v1/humans/findByUniqueId/:uniqueId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["uniqueId"], []);
    const service = (sdk.api as any)["human"];
    let methodName = "getHumanByEntityId";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHumanByEntityId");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHumanByEntityId");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getHumanByEntityId"
    });
  }
});

// GET /api/v1/humans/get  ->  sdk.api.human.get4(...) [from opId="get_4"]
generatedRoutes.get("/api/v1/humans/get", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["identity"]);
    const service = (sdk.api as any)["human"];
    let methodName = "get4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.get4"
    });
  }
});

// POST /api/v1/humans/getAll  ->  sdk.api.human.getHumans(...) [from opId="getHumans"]
generatedRoutes.post("/api/v1/humans/getAll", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pageable"]);
    const service = (sdk.api as any)["human"];
    let methodName = "getHumans";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHumans");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHumans");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getHumans"
    });
  }
});

// GET /api/v1/humans/human-records  ->  sdk.api.human.getSampleHumanCSV(...) [from opId="getSampleHumanCSV"]
generatedRoutes.get("/api/v1/humans/human-records", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "getSampleHumanCSV";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSampleHumanCSV");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSampleHumanCSV");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getSampleHumanCSV"
    });
  }
});

// POST /api/v1/humans/humanJobStatus  ->  sdk.api.human.getHumanJobStatus(...) [from opId="getHumanJobStatus"]
generatedRoutes.post("/api/v1/humans/humanJobStatus", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["status","pageable"]);
    const service = (sdk.api as any)["human"];
    let methodName = "getHumanJobStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHumanJobStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHumanJobStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getHumanJobStatus"
    });
  }
});

// POST /api/v1/humans/upload-metadata  ->  sdk.api.human.updateMetaDataOfHuman(...) [from opId="updateMetaDataOfHuman"]
generatedRoutes.post("/api/v1/humans/upload-metadata", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "updateMetaDataOfHuman";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateMetaDataOfHuman");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateMetaDataOfHuman");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.updateMetaDataOfHuman"
    });
  }
});

// GET /api/v1/humans/zip  ->  sdk.api.human.getHumansCSV(...) [from opId="getHumansCSV"]
generatedRoutes.get("/api/v1/humans/zip", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["human"];
    let methodName = "getHumansCSV";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHumansCSV");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHumansCSV");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getHumansCSV"
    });
  }
});

// DELETE /api/v1/humans/{id}  ->  sdk.api.human.deleteImage(...) [from opId="deleteImage"]
generatedRoutes.delete("/api/v1/humans/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["identity"]);
    const service = (sdk.api as any)["human"];
    let methodName = "deleteImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.deleteImage"
    });
  }
});

// GET /api/v1/humans/{id}  ->  sdk.api.human.getImageFile1(...) [from opId="getImageFile_1"]
generatedRoutes.get("/api/v1/humans/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["human"];
    let methodName = "getImageFile1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getImageFile_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getImageFile_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "human.getImageFile1"
    });
  }
});

// GET /api/v1/images  ->  sdk.api.imageManagementResource.getAll4(...) [from opId="getAll_4"]
generatedRoutes.get("/api/v1/images", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "getAll4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.getAll4"
    });
  }
});

// GET /api/v1/images/image/{id}  ->  sdk.api.imageManagementResource.getImage2(...) [from opId="getImage_2"]
generatedRoutes.get("/api/v1/images/image/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "getImage2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getImage_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getImage_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.getImage2"
    });
  }
});

// GET /api/v1/images/image/{id}/downscaled  ->  sdk.api.imageManagementResource.getScaledImage(...) [from opId="getScaledImage"]
generatedRoutes.get("/api/v1/images/image/:id/downscaled", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "getScaledImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getScaledImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getScaledImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.getScaledImage"
    });
  }
});

// GET /api/v1/images/tiles/{id}/{z}/{x}/{y}  ->  sdk.api.imageManagementResource.getTile(...) [from opId="getTile"]
generatedRoutes.get("/api/v1/images/tiles/:id/:z/:x/:y", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id","z","x","y"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "getTile";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTile");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTile");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.getTile"
    });
  }
});

// DELETE /api/v1/images/{id}  ->  sdk.api.imageManagementResource.delete4(...) [from opId="delete_4"]
generatedRoutes.delete("/api/v1/images/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "delete4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.delete4"
    });
  }
});

// GET /api/v1/images/{id}  ->  sdk.api.imageManagementResource.getMeta(...) [from opId="getMeta"]
generatedRoutes.get("/api/v1/images/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "getMeta";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getMeta");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getMeta");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.getMeta"
    });
  }
});

// POST /api/v1/images/{id}/import  ->  sdk.api.imageManagementResource.handleMapImport(...) [from opId="handleMapImport"]
generatedRoutes.post("/api/v1/images/:id/import", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "handleMapImport";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleMapImport");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleMapImport");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.handleMapImport"
    });
  }
});

// POST /api/v1/images/{id}/upload  ->  sdk.api.imageManagementResource.handleFileUpload2(...) [from opId="handleFileUpload_2"]
generatedRoutes.post("/api/v1/images/:id/upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], ["imageType"]);
    const service = (sdk.api as any)["imageManagementResource"];
    let methodName = "handleFileUpload2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleFileUpload_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleFileUpload_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "imageManagementResource.handleFileUpload2"
    });
  }
});

// GET /api/v1/integrations  ->  sdk.api.dataIntegrationPipelineResource.getAll3(...) [from opId="getAll_3"]
generatedRoutes.get("/api/v1/integrations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["keyword","pageable"]);
    const service = (sdk.api as any)["dataIntegrationPipelineResource"];
    let methodName = "getAll3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "dataIntegrationPipelineResource.getAll3"
    });
  }
});

// POST /api/v1/integrations  ->  sdk.api.dataIntegrationPipelineResource.create3(...) [from opId="create_3"]
generatedRoutes.post("/api/v1/integrations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["integrationPipelineDetails"]);
    const service = (sdk.api as any)["dataIntegrationPipelineResource"];
    let methodName = "create3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "dataIntegrationPipelineResource.create3"
    });
  }
});

// DELETE /api/v1/integrations/{id}  ->  sdk.api.dataIntegrationPipelineResource.delete3(...) [from opId="delete_3"]
generatedRoutes.delete("/api/v1/integrations/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["dataIntegrationPipelineResource"];
    let methodName = "delete3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "dataIntegrationPipelineResource.delete3"
    });
  }
});

// GET /api/v1/integrations/{id}  ->  sdk.api.dataIntegrationPipelineResource.get3(...) [from opId="get_3"]
generatedRoutes.get("/api/v1/integrations/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["dataIntegrationPipelineResource"];
    let methodName = "get3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "dataIntegrationPipelineResource.get3"
    });
  }
});

// PUT /api/v1/integrations/{id}  ->  sdk.api.dataIntegrationPipelineResource.update1(...) [from opId="update_1"]
generatedRoutes.put("/api/v1/integrations/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], ["integrationPipelineDetails"]);
    const service = (sdk.api as any)["dataIntegrationPipelineResource"];
    let methodName = "update1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "update_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: update_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "dataIntegrationPipelineResource.update1"
    });
  }
});

// POST /api/v1/iot/analytics/distribution  ->  sdk.api.iOTAnalyticsQueries.distributionQuery1(...) [from opId="distributionQuery_1"]
generatedRoutes.post("/api/v1/iot/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["iOTAnalyticsQueries"];
    let methodName = "distributionQuery1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQuery_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQuery_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iOTAnalyticsQueries.distributionQuery1"
    });
  }
});

// POST /api/v1/iot/analytics/gridDistribution  ->  sdk.api.iOTAnalyticsQueries.gridDistributionQuery(...) [from opId="gridDistributionQuery"]
generatedRoutes.post("/api/v1/iot/analytics/gridDistribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["iOTAnalyticsQueries"];
    let methodName = "gridDistributionQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "gridDistributionQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: gridDistributionQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iOTAnalyticsQueries.gridDistributionQuery"
    });
  }
});

// POST /api/v1/iotAnalytics/iot-locations  ->  sdk.api.iotCameraAnalytics.iotDistributionQuery(...) [from opId="iotDistributionQuery"]
generatedRoutes.post("/api/v1/iotAnalytics/iot-locations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["iotCameraAnalytics"];
    let methodName = "iotDistributionQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "iotDistributionQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: iotDistributionQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iotCameraAnalytics.iotDistributionQuery"
    });
  }
});

// POST /api/v1/iotAnalytics/iot-locations/grids  ->  sdk.api.iotCameraAnalytics.iotGridDistibutionQuery(...) [from opId="iotGridDistibutionQuery"]
generatedRoutes.post("/api/v1/iotAnalytics/iot-locations/grids", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["iotCameraAnalytics"];
    let methodName = "iotGridDistibutionQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "iotGridDistibutionQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: iotGridDistibutionQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iotCameraAnalytics.iotGridDistibutionQuery"
    });
  }
});

// POST /api/v1/kiosk/checkin  ->  sdk.api.externalKioskIntegrationAPI.checkin1(...) [from opId="checkin_1"]
generatedRoutes.post("/api/v1/kiosk/checkin", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["externalKioskIntegrationAPI"];
    let methodName = "checkin1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkin_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkin_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "externalKioskIntegrationAPI.checkin1"
    });
  }
});

// POST /api/v1/kiosk/checkout  ->  sdk.api.externalKioskIntegrationAPI.checkout(...) [from opId="checkout"]
generatedRoutes.post("/api/v1/kiosk/checkout", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["externalKioskIntegrationAPI"];
    let methodName = "checkout";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkout");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkout");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "externalKioskIntegrationAPI.checkout"
    });
  }
});

// GET /api/v1/kiosk/locationMappings  ->  sdk.api.externalKioskIntegrationAPI.getLocationMappings(...) [from opId="getLocationMappings"]
generatedRoutes.get("/api/v1/kiosk/locationMappings", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["externalKioskIntegrationAPI"];
    let methodName = "getLocationMappings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocationMappings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocationMappings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "externalKioskIntegrationAPI.getLocationMappings"
    });
  }
});

// GET /api/v1/kiosk/userInfo/{login}/{siteId}/{type}  ->  sdk.api.externalKioskIntegrationAPI.getUserInfo(...) [from opId="getUserInfo"]
generatedRoutes.get("/api/v1/kiosk/userInfo/:login/:siteId/:type", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["login","siteId","type"], []);
    const service = (sdk.api as any)["externalKioskIntegrationAPI"];
    let methodName = "getUserInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "externalKioskIntegrationAPI.getUserInfo"
    });
  }
});

// GET /api/v1/location/analytics/densityAroundIndex  ->  sdk.api.locationAnalyticsResource.getDensityAroundIndex(...) [from opId="getDensityAroundIndex"]
generatedRoutes.get("/api/v1/location/analytics/densityAroundIndex", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["id","minDensityLevel","timestamp","floorId"]);
    const service = (sdk.api as any)["locationAnalyticsResource"];
    let methodName = "getDensityAroundIndex";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getDensityAroundIndex");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getDensityAroundIndex");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAnalyticsResource.getDensityAroundIndex"
    });
  }
});

// POST /api/v1/location/analytics/distribution  ->  sdk.api.locationAnalyticsResource.distributionQuery(...) [from opId="distributionQuery"]
generatedRoutes.post("/api/v1/location/analytics/distribution", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["locationAnalyticsResource"];
    let methodName = "distributionQuery";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "distributionQuery");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: distributionQuery");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAnalyticsResource.distributionQuery"
    });
  }
});

// GET /api/v1/location/analytics/floorDensities  ->  sdk.api.locationAnalyticsResource.floorDensities(...) [from opId="floorDensities"]
generatedRoutes.get("/api/v1/location/analytics/floorDensities", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["timestamp","floorId","siteId","minDensityLevel"]);
    const service = (sdk.api as any)["locationAnalyticsResource"];
    let methodName = "floorDensities";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "floorDensities");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: floorDensities");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAnalyticsResource.floorDensities"
    });
  }
});

// GET /api/v1/locationAttributes  ->  sdk.api.locationAttributesResource.getAll2(...) [from opId="getAll_2"]
generatedRoutes.get("/api/v1/locationAttributes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["locationId","timeInMillis"]);
    const service = (sdk.api as any)["locationAttributesResource"];
    let methodName = "getAll2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAttributesResource.getAll2"
    });
  }
});

// POST /api/v1/locationAttributes  ->  sdk.api.locationAttributesResource.save5(...) [from opId="save_5"]
generatedRoutes.post("/api/v1/locationAttributes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["locationAttributesResource"];
    let methodName = "save5";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_5");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_5");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAttributesResource.save5"
    });
  }
});

// DELETE /api/v1/locationAttributes/{id}  ->  sdk.api.locationAttributesResource.delete2(...) [from opId="delete_2"]
generatedRoutes.delete("/api/v1/locationAttributes/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationAttributesResource"];
    let methodName = "delete2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAttributesResource.delete2"
    });
  }
});

// GET /api/v1/locationAttributes/{id}  ->  sdk.api.locationAttributesResource.get2(...) [from opId="get_2"]
generatedRoutes.get("/api/v1/locationAttributes/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationAttributesResource"];
    let methodName = "get2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAttributesResource.get2"
    });
  }
});

// DELETE /api/v1/locationAttributes/{id}/end  ->  sdk.api.locationAttributesResource.end(...) [from opId="end"]
generatedRoutes.delete("/api/v1/locationAttributes/:id/end", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationAttributesResource"];
    let methodName = "end";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "end");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: end");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationAttributesResource.end"
    });
  }
});

// GET /api/v1/locations  ->  sdk.api.siteHierarchy.getLocations1(...) [from opId="getLocations_1"]
generatedRoutes.get("/api/v1/locations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getLocations1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocations_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocations_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getLocations1"
    });
  }
});

// POST /api/v1/locations/  ->  sdk.api.siteHierarchy.setSiteInfo(...) [from opId="setSiteInfo"]
generatedRoutes.post("/api/v1/locations/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "setSiteInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setSiteInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setSiteInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.setSiteInfo"
    });
  }
});

// GET /api/v1/locations/all-tags  ->  sdk.api.siteHierarchy.getAllTags(...) [from opId="getAllTags"]
generatedRoutes.get("/api/v1/locations/all-tags", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getAllTags";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllTags");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllTags");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getAllTags"
    });
  }
});

// POST /api/v1/locations/ap  ->  sdk.api.siteHierarchy.updateAp(...) [from opId="updateAp"]
generatedRoutes.post("/api/v1/locations/ap", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "updateAp";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateAp");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateAp");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.updateAp"
    });
  }
});

// GET /api/v1/locations/csv-upload-sample  ->  sdk.api.siteHierarchy.getSample(...) [from opId="getSample"]
generatedRoutes.get("/api/v1/locations/csv-upload-sample", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getSample";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSample");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSample");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getSample"
    });
  }
});

// GET /api/v1/locations/floors  ->  sdk.api.siteHierarchy.getFloors(...) [from opId="getFloors"]
generatedRoutes.get("/api/v1/locations/floors", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getFloors";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFloors");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFloors");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getFloors"
    });
  }
});

// GET /api/v1/locations/groupTags/effective/infopot/{infospotId}  ->  sdk.api.siteHierarchy.getGroupTagsForInfospot(...) [from opId="getGroupTagsForInfospot"]
generatedRoutes.get("/api/v1/locations/groupTags/effective/infopot/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getGroupTagsForInfospot";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getGroupTagsForInfospot");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getGroupTagsForInfospot");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getGroupTagsForInfospot"
    });
  }
});

// GET /api/v1/locations/groupTags/effective/location/{locationId}  ->  sdk.api.siteHierarchy.getGroupTagsForLocation(...) [from opId="getGroupTagsForLocation"]
generatedRoutes.get("/api/v1/locations/groupTags/effective/location/:locationId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["locationId"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getGroupTagsForLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getGroupTagsForLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getGroupTagsForLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getGroupTagsForLocation"
    });
  }
});

// GET /api/v1/locations/hierarchy  ->  sdk.api.siteHierarchy.getLocationHeirary(...) [from opId="getLocationHeirary"]
generatedRoutes.get("/api/v1/locations/hierarchy", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getLocationHeirary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocationHeirary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocationHeirary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getLocationHeirary"
    });
  }
});

// GET /api/v1/locations/infospot/{id}/zones  ->  sdk.api.siteHierarchy.getZonesForInfospot(...) [from opId="getZonesForInfospot"]
generatedRoutes.get("/api/v1/locations/infospot/:id/zones", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getZonesForInfospot";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getZonesForInfospot");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getZonesForInfospot");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getZonesForInfospot"
    });
  }
});

// GET /api/v1/locations/infospots/{login}  ->  sdk.api.siteHierarchy.getInfospotsForUser(...) [from opId="getInfospotsForUser"]
generatedRoutes.get("/api/v1/locations/infospots/:login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["login"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getInfospotsForUser";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getInfospotsForUser");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getInfospotsForUser");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getInfospotsForUser"
    });
  }
});

// GET /api/v1/locations/kloudroomEmail/{infospotId}  ->  sdk.api.siteHierarchy.sendKloudroomEmail(...) [from opId="sendKloudroomEmail"]
generatedRoutes.get("/api/v1/locations/kloudroomEmail/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "sendKloudroomEmail";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "sendKloudroomEmail");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: sendKloudroomEmail");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.sendKloudroomEmail"
    });
  }
});

// PUT /api/v1/locations/location  ->  sdk.api.siteHierarchy.updateLocation(...) [from opId="updateLocation"]
generatedRoutes.put("/api/v1/locations/location", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "updateLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.updateLocation"
    });
  }
});

// PUT /api/v1/locations/location/updateChild/{id}  ->  sdk.api.siteHierarchy.addChildLocation(...) [from opId="addChildLocation"]
generatedRoutes.put("/api/v1/locations/location/updateChild/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "addChildLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "addChildLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: addChildLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.addChildLocation"
    });
  }
});

// DELETE /api/v1/locations/location/{id}  ->  sdk.api.siteHierarchy.deleteLocation(...) [from opId="deleteLocation"]
generatedRoutes.delete("/api/v1/locations/location/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "deleteLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.deleteLocation"
    });
  }
});

// PUT /api/v1/locations/location/{id}/moveTo/{parentId}  ->  sdk.api.siteHierarchy.moveToAnotherParent(...) [from opId="moveToAnotherParent"]
generatedRoutes.put("/api/v1/locations/location/:id/moveTo/:parentId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id","parentId"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "moveToAnotherParent";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "moveToAnotherParent");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: moveToAnotherParent");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.moveToAnotherParent"
    });
  }
});

// GET /api/v1/locations/locationSummary  ->  sdk.api.siteHierarchy.locationSummary(...) [from opId="locationSummary"]
generatedRoutes.get("/api/v1/locations/locationSummary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "locationSummary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "locationSummary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: locationSummary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.locationSummary"
    });
  }
});

// GET /api/v1/locations/miniHierarchy  ->  sdk.api.siteHierarchy.getMiniHierarchy(...) [from opId="getMiniHierarchy"]
generatedRoutes.get("/api/v1/locations/miniHierarchy", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getMiniHierarchy";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getMiniHierarchy");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getMiniHierarchy");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getMiniHierarchy"
    });
  }
});

// POST /api/v1/locations/monitoring-off  ->  sdk.api.siteHierarchy.unsetMonitoring1(...) [from opId="unsetMonitoring_1"]
generatedRoutes.post("/api/v1/locations/monitoring-off", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "unsetMonitoring1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "unsetMonitoring_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: unsetMonitoring_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.unsetMonitoring1"
    });
  }
});

// POST /api/v1/locations/monitoring-off/{id}  ->  sdk.api.siteHierarchy.unsetMonitoring(...) [from opId="unsetMonitoring"]
generatedRoutes.post("/api/v1/locations/monitoring-off/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "unsetMonitoring";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "unsetMonitoring");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: unsetMonitoring");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.unsetMonitoring"
    });
  }
});

// POST /api/v1/locations/monitoring-on  ->  sdk.api.siteHierarchy.setMonitoring1(...) [from opId="setMonitoring_1"]
generatedRoutes.post("/api/v1/locations/monitoring-on", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "setMonitoring1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setMonitoring_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setMonitoring_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.setMonitoring1"
    });
  }
});

// POST /api/v1/locations/monitoring-on/{id}  ->  sdk.api.siteHierarchy.setMonitoring(...) [from opId="setMonitoring"]
generatedRoutes.post("/api/v1/locations/monitoring-on/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "setMonitoring";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setMonitoring");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setMonitoring");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.setMonitoring"
    });
  }
});

// GET /api/v1/locations/myInfospots  ->  sdk.api.siteHierarchy.getMyInfospots(...) [from opId="getMyInfospots"]
generatedRoutes.get("/api/v1/locations/myInfospots", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getMyInfospots";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getMyInfospots");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getMyInfospots");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getMyInfospots"
    });
  }
});

// GET /api/v1/locations/nonleaves  ->  sdk.api.siteHierarchy.getNonLeaves(...) [from opId="getNonLeaves"]
generatedRoutes.get("/api/v1/locations/nonleaves", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getNonLeaves";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getNonLeaves");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getNonLeaves");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getNonLeaves"
    });
  }
});

// GET /api/v1/locations/nonleavesSummary  ->  sdk.api.siteHierarchy.nonleavesSummary(...) [from opId="nonleavesSummary"]
generatedRoutes.get("/api/v1/locations/nonleavesSummary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "nonleavesSummary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "nonleavesSummary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: nonleavesSummary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.nonleavesSummary"
    });
  }
});

// GET /api/v1/locations/parent/{locationId}  ->  sdk.api.siteHierarchy.findParent(...) [from opId="findParent"]
generatedRoutes.get("/api/v1/locations/parent/:locationId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["locationId"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "findParent";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findParent");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findParent");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.findParent"
    });
  }
});

// POST /api/v1/locations/shortestPath  ->  sdk.api.siteHierarchy.getShortestPath(...) [from opId="getShortestPath"]
generatedRoutes.post("/api/v1/locations/shortestPath", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getShortestPath";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getShortestPath");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getShortestPath");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getShortestPath"
    });
  }
});

// POST /api/v1/locations/shortestPathMultiFloor  ->  sdk.api.siteHierarchy.getShortestPahtMultiFloor(...) [from opId="getShortestPahtMultiFloor"]
generatedRoutes.post("/api/v1/locations/shortestPathMultiFloor", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getShortestPahtMultiFloor";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getShortestPahtMultiFloor");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getShortestPahtMultiFloor");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getShortestPahtMultiFloor"
    });
  }
});

// GET /api/v1/locations/sites  ->  sdk.api.siteHierarchy.getSites1(...) [from opId="getSites_1"]
generatedRoutes.get("/api/v1/locations/sites", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getSites1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSites_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSites_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getSites1"
    });
  }
});

// POST /api/v1/locations/upload  ->  sdk.api.siteHierarchy.handleFileUpload1(...) [from opId="handleFileUpload_1"]
generatedRoutes.post("/api/v1/locations/upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "handleFileUpload1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleFileUpload_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleFileUpload_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.handleFileUpload1"
    });
  }
});

// GET /api/v1/locations/zone/{id}/infospots  ->  sdk.api.siteHierarchy.getInfospotsForZone(...) [from opId="getInfospotsForZone"]
generatedRoutes.get("/api/v1/locations/zone/:id/infospots", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getInfospotsForZone";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getInfospotsForZone");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getInfospotsForZone");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getInfospotsForZone"
    });
  }
});

// GET /api/v1/locations/{id}  ->  sdk.api.siteHierarchy.getLocation1(...) [from opId="getLocation_1"]
generatedRoutes.get("/api/v1/locations/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getLocation1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocation_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocation_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getLocation1"
    });
  }
});

// GET /api/v1/locations/{id}/breadcrumbs  ->  sdk.api.siteHierarchy.getBreadcrump(...) [from opId="getBreadcrump"]
generatedRoutes.get("/api/v1/locations/:id/breadcrumbs", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getBreadcrump";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getBreadcrump");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getBreadcrump");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getBreadcrump"
    });
  }
});

// GET /api/v1/locations/{id}/csv  ->  sdk.api.siteHierarchy.getSiteCSV(...) [from opId="getSiteCSV"]
generatedRoutes.get("/api/v1/locations/:id/csv", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getSiteCSV";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSiteCSV");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSiteCSV");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getSiteCSV"
    });
  }
});

// POST /api/v1/locations/{id}/csv  ->  sdk.api.siteHierarchy.handleSiteUpload(...) [from opId="handleSiteUpload"]
generatedRoutes.post("/api/v1/locations/:id/csv", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "handleSiteUpload";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleSiteUpload");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleSiteUpload");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.handleSiteUpload"
    });
  }
});

// GET /api/v1/locations/{id}/sites  ->  sdk.api.siteHierarchy.getSites(...) [from opId="getSites"]
generatedRoutes.get("/api/v1/locations/:id/sites", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getSites";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSites");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSites");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getSites"
    });
  }
});

// GET /api/v1/locations/{id}/sitesS  ->  sdk.api.siteHierarchy.getSiteSummarysForLocation(...) [from opId="getSiteSummarysForLocation"]
generatedRoutes.get("/api/v1/locations/:id/sitesS", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getSiteSummarysForLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSiteSummarysForLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSiteSummarysForLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getSiteSummarysForLocation"
    });
  }
});

// GET /api/v1/locations/{id}/zones  ->  sdk.api.siteHierarchy.getLeaves(...) [from opId="getLeaves"]
generatedRoutes.get("/api/v1/locations/:id/zones", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getLeaves";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLeaves");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLeaves");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getLeaves"
    });
  }
});

// GET /api/v1/locations/{id}/zonesS  ->  sdk.api.siteHierarchy.getZoneSummarysForLocation(...) [from opId="getZoneSummarysForLocation"]
generatedRoutes.get("/api/v1/locations/:id/zonesS", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["siteHierarchy"];
    let methodName = "getZoneSummarysForLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getZoneSummarysForLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getZoneSummarysForLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "siteHierarchy.getZoneSummarysForLocation"
    });
  }
});

// POST /api/v1/nec-iccc/history  ->  sdk.api.iccc.uploadHistory(...) [from opId="uploadHistory"]
generatedRoutes.post("/api/v1/nec-iccc/history", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["iccc"];
    let methodName = "uploadHistory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "uploadHistory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: uploadHistory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iccc.uploadHistory"
    });
  }
});

// POST /api/v1/nec-iccc/init  ->  sdk.api.iccc.init(...) [from opId="init"]
generatedRoutes.post("/api/v1/nec-iccc/init", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["iccc"];
    let methodName = "init";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "init");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: init");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iccc.init"
    });
  }
});

// GET /api/v1/nec-iccc/locations  ->  sdk.api.iccc.getLocations(...) [from opId="getLocations"]
generatedRoutes.get("/api/v1/nec-iccc/locations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["iccc"];
    let methodName = "getLocations";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocations");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocations");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iccc.getLocations"
    });
  }
});

// GET /api/v1/nec-iccc/sensorTypes  ->  sdk.api.iccc.getSensorTypes(...) [from opId="getSensorTypes"]
generatedRoutes.get("/api/v1/nec-iccc/sensorTypes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["iccc"];
    let methodName = "getSensorTypes";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSensorTypes");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSensorTypes");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iccc.getSensorTypes"
    });
  }
});

// GET /api/v1/nec-iccc/urns  ->  sdk.api.iccc.getUrn(...) [from opId="getUrn"]
generatedRoutes.get("/api/v1/nec-iccc/urns", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["iccc"];
    let methodName = "getUrn";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUrn");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUrn");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "iccc.getUrn"
    });
  }
});

// GET /api/v1/networkElements/location/{locationId}  ->  sdk.api.networkElementExternalResource.getNetworkElements(...) [from opId="getNetworkElements"]
generatedRoutes.get("/api/v1/networkElements/location/:locationId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["locationId"], ["types","findInLocationHierarchy"]);
    const service = (sdk.api as any)["networkElementExternalResource"];
    let methodName = "getNetworkElements";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getNetworkElements");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getNetworkElements");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "networkElementExternalResource.getNetworkElements"
    });
  }
});

// PUT /api/v1/networkElements/update/accessPoints  ->  sdk.api.networkElementExternalResource.saveAccessPoints(...) [from opId="saveAccessPoints"]
generatedRoutes.put("/api/v1/networkElements/update/accessPoints", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["networkElementExternalResource"];
    let methodName = "saveAccessPoints";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveAccessPoints");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveAccessPoints");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "networkElementExternalResource.saveAccessPoints"
    });
  }
});

// PUT /api/v1/networkElements/update/cameras  ->  sdk.api.networkElementExternalResource.saveVisionSensor(...) [from opId="saveVisionSensor"]
generatedRoutes.put("/api/v1/networkElements/update/cameras", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["networkElementExternalResource"];
    let methodName = "saveVisionSensor";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveVisionSensor");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveVisionSensor");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "networkElementExternalResource.saveVisionSensor"
    });
  }
});

// DELETE /api/v1/notificationHistory  ->  sdk.api.notificationHistoryResource.deleteAll(...) [from opId="deleteAll"]
generatedRoutes.delete("/api/v1/notificationHistory", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "deleteAll";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteAll");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteAll");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.deleteAll"
    });
  }
});

// GET /api/v1/notificationHistory  ->  sdk.api.notificationHistoryResource.getAllByPage(...) [from opId="getAllByPage"]
generatedRoutes.get("/api/v1/notificationHistory", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable"]);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "getAllByPage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllByPage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllByPage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.getAllByPage"
    });
  }
});

// POST /api/v1/notificationHistory/notificationSearch  ->  sdk.api.notificationHistoryResource.notificationSearch(...) [from opId="notificationSearch"]
generatedRoutes.post("/api/v1/notificationHistory/notificationSearch", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pageable"]);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "notificationSearch";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "notificationSearch");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: notificationSearch");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.notificationSearch"
    });
  }
});

// GET /api/v1/notificationHistory/page  ->  sdk.api.notificationHistoryResource.getAllByPage1(...) [from opId="getAllByPage_1"]
generatedRoutes.get("/api/v1/notificationHistory/page", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable"]);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "getAllByPage1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllByPage_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllByPage_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.getAllByPage1"
    });
  }
});

// DELETE /api/v1/notificationHistory/{id}  ->  sdk.api.notificationHistoryResource.delete1(...) [from opId="delete_1"]
generatedRoutes.delete("/api/v1/notificationHistory/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "delete1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.delete1"
    });
  }
});

// GET /api/v1/notificationHistory/{id}  ->  sdk.api.notificationHistoryResource.get1(...) [from opId="get_1"]
generatedRoutes.get("/api/v1/notificationHistory/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["notificationHistoryResource"];
    let methodName = "get1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "notificationHistoryResource.get1"
    });
  }
});

// POST /api/v1/reports/csvReport/{reportName}  ->  sdk.api.reportResource.generateCSVReport1(...) [from opId="generateCSVReport_1"]
generatedRoutes.post("/api/v1/reports/csvReport/:reportName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["reportName"], []);
    const service = (sdk.api as any)["reportResource"];
    let methodName = "generateCSVReport1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "generateCSVReport_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: generateCSVReport_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "reportResource.generateCSVReport1"
    });
  }
});

// POST /api/v1/reports/csvReport/{reportName}/{queryName}  ->  sdk.api.reportResource.generateCSVReport(...) [from opId="generateCSVReport"]
generatedRoutes.post("/api/v1/reports/csvReport/:reportName/:queryName", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["reportName","queryName"], []);
    const service = (sdk.api as any)["reportResource"];
    let methodName = "generateCSVReport";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "generateCSVReport");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: generateCSVReport");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "reportResource.generateCSVReport"
    });
  }
});

// POST /api/v1/setting/change-retention  ->  sdk.api.settingResource.changeRetention(...) [from opId="changeRetention"]
generatedRoutes.post("/api/v1/setting/change-retention", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "changeRetention";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "changeRetention");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: changeRetention");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.changeRetention"
    });
  }
});

// POST /api/v1/setting/ssl/upload  ->  sdk.api.settingResource.sslUpload(...) [from opId="sslUpload"]
generatedRoutes.post("/api/v1/setting/ssl/upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "sslUpload";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "sslUpload");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: sslUpload");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.sslUpload"
    });
  }
});

// GET /api/v1/setting/system/ext-auth  ->  sdk.api.settingResource.getOAuth(...) [from opId="getOAuth"]
generatedRoutes.get("/api/v1/setting/system/ext-auth", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getOAuth";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOAuth");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOAuth");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getOAuth"
    });
  }
});

// POST /api/v1/setting/system/ext-auth  ->  sdk.api.settingResource.setExternalAuth(...) [from opId="setExternalAuth"]
generatedRoutes.post("/api/v1/setting/system/ext-auth", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "setExternalAuth";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setExternalAuth");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setExternalAuth");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.setExternalAuth"
    });
  }
});

// GET /api/v1/setting/system/hybrid-settings-csv  ->  sdk.api.settingResource.getHybridSettings(...) [from opId="getHybridSettings"]
generatedRoutes.get("/api/v1/setting/system/hybrid-settings-csv", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getHybridSettings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHybridSettings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHybridSettings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getHybridSettings"
    });
  }
});

// GET /api/v1/setting/system/timezones  ->  sdk.api.settingResource.getTimeZones(...) [from opId="getTimeZones"]
generatedRoutes.get("/api/v1/setting/system/timezones", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getTimeZones";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTimeZones");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTimeZones");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getTimeZones"
    });
  }
});

// DELETE /api/v1/setting/system/{id}  ->  sdk.api.settingResource.deleteSystemSetting(...) [from opId="deleteSystemSetting"]
generatedRoutes.delete("/api/v1/setting/system/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "deleteSystemSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteSystemSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteSystemSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.deleteSystemSetting"
    });
  }
});

// GET /api/v1/setting/system/{id}  ->  sdk.api.settingResource.getSystemSetting(...) [from opId="getSystemSetting"]
generatedRoutes.get("/api/v1/setting/system/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["hide"]);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getSystemSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSystemSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSystemSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getSystemSetting"
    });
  }
});

// POST /api/v1/setting/system/{id}  ->  sdk.api.settingResource.setSystemSetting(...) [from opId="setSystemSetting"]
generatedRoutes.post("/api/v1/setting/system/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "setSystemSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setSystemSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setSystemSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.setSystemSetting"
    });
  }
});

// GET /api/v1/setting/system/{id}/image  ->  sdk.api.settingResource.getSystemImage1(...) [from opId="getSystemImage_1"]
generatedRoutes.get("/api/v1/setting/system/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getSystemImage1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSystemImage_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSystemImage_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getSystemImage1"
    });
  }
});

// POST /api/v1/setting/system/{id}/image  ->  sdk.api.settingResource.systemImage(...) [from opId="systemImage"]
generatedRoutes.post("/api/v1/setting/system/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "systemImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "systemImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: systemImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.systemImage"
    });
  }
});

// GET /api/v1/setting/system/{id}/image-scaled  ->  sdk.api.settingResource.getScaledSystemImage(...) [from opId="getScaledSystemImage"]
generatedRoutes.get("/api/v1/setting/system/:id/image-scaled", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getScaledSystemImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getScaledSystemImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getScaledSystemImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getScaledSystemImage"
    });
  }
});

// DELETE /api/v1/setting/user/{id}  ->  sdk.api.settingResource.deleteUserSetting(...) [from opId="deleteUserSetting"]
generatedRoutes.delete("/api/v1/setting/user/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "deleteUserSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteUserSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteUserSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.deleteUserSetting"
    });
  }
});

// GET /api/v1/setting/user/{id}  ->  sdk.api.settingResource.getUserSetting(...) [from opId="getUserSetting"]
generatedRoutes.get("/api/v1/setting/user/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getUserSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getUserSetting"
    });
  }
});

// POST /api/v1/setting/user/{id}  ->  sdk.api.settingResource.setUserSetting(...) [from opId="setUserSetting"]
generatedRoutes.post("/api/v1/setting/user/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "setUserSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setUserSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setUserSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.setUserSetting"
    });
  }
});

// GET /api/v1/setting/user/{id}/image  ->  sdk.api.settingResource.getUserImage(...) [from opId="getUserImage"]
generatedRoutes.get("/api/v1/setting/user/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "getUserImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.getUserImage"
    });
  }
});

// POST /api/v1/setting/user/{id}/image  ->  sdk.api.settingResource.userImage(...) [from opId="userImage"]
generatedRoutes.post("/api/v1/setting/user/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["settingResource"];
    let methodName = "userImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "userImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: userImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "settingResource.userImage"
    });
  }
});

// POST /api/v1/site/nearby  ->  sdk.api.locationGeoJsonConfiguration.findNearBySites(...) [from opId="findNearBySites"]
generatedRoutes.post("/api/v1/site/nearby", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "findNearBySites";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findNearBySites");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findNearBySites");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.findNearBySites"
    });
  }
});

// GET /api/v1/symphonict/all-openspaces  ->  sdk.api.symphonictAPIs.getAllOpenSpaces(...) [from opId="getAllOpenSpaces"]
generatedRoutes.get("/api/v1/symphonict/all-openspaces", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "getAllOpenSpaces";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllOpenSpaces");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllOpenSpaces");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.getAllOpenSpaces"
    });
  }
});

// GET /api/v1/symphonict/all-projects  ->  sdk.api.symphonictAPIs.getAllProjects(...) [from opId="getAllProjects"]
generatedRoutes.get("/api/v1/symphonict/all-projects", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "getAllProjects";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllProjects");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllProjects");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.getAllProjects"
    });
  }
});

// POST /api/v1/symphonict/messages  ->  sdk.api.symphonictAPIs.postMessages(...) [from opId="postMessages"]
generatedRoutes.post("/api/v1/symphonict/messages", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "postMessages";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "postMessages");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: postMessages");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.postMessages"
    });
  }
});

// GET /api/v1/symphonict/user-info  ->  sdk.api.symphonictAPIs.getUserInfos(...) [from opId="getUserInfos"]
generatedRoutes.get("/api/v1/symphonict/user-info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable"]);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "getUserInfos";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserInfos");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserInfos");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.getUserInfos"
    });
  }
});

// PUT /api/v1/symphonict/user-info  ->  sdk.api.symphonictAPIs.putUserUpdates(...) [from opId="putUserUpdates"]
generatedRoutes.put("/api/v1/symphonict/user-info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "putUserUpdates";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "putUserUpdates");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: putUserUpdates");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.putUserUpdates"
    });
  }
});

// POST /api/v1/symphonict/zoom-mtg-info  ->  sdk.api.symphonictAPIs.postTwo(...) [from opId="postTwo"]
generatedRoutes.post("/api/v1/symphonict/zoom-mtg-info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["symphonictAPIs"];
    let methodName = "postTwo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "postTwo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: postTwo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "symphonictAPIs.postTwo"
    });
  }
});

// GET /api/v1/system-status  ->  sdk.api.monitoringResource.getStatus1(...) [from opId="getStatus_1"]
generatedRoutes.get("/api/v1/system-status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["monitoringResource"];
    let methodName = "getStatus1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getStatus_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getStatus_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "monitoringResource.getStatus1"
    });
  }
});

// GET /api/v1/tags  ->  sdk.api.tagResource.getAll1(...) [from opId="getAll_1"]
generatedRoutes.get("/api/v1/tags", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["type"]);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "getAll1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAll_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAll_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.getAll1"
    });
  }
});

// POST /api/v1/tags  ->  sdk.api.tagResource.save4(...) [from opId="save_4"]
generatedRoutes.post("/api/v1/tags", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "save4";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_4");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_4");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.save4"
    });
  }
});

// GET /api/v1/tags/types  ->  sdk.api.tagResource.getTypes(...) [from opId="getTypes"]
generatedRoutes.get("/api/v1/tags/types", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "getTypes";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTypes");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTypes");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.getTypes"
    });
  }
});

// DELETE /api/v1/tags/{id}  ->  sdk.api.tagResource.delete(...) [from opId="delete"]
generatedRoutes.delete("/api/v1/tags/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "delete";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "delete");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: delete");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.delete"
    });
  }
});

// GET /api/v1/tags/{id}  ->  sdk.api.tagResource.get(...) [from opId="get"]
generatedRoutes.get("/api/v1/tags/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "get";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "get");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: get");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.get"
    });
  }
});

// GET /api/v1/tags/{id}/image  ->  sdk.api.tagResource.getImage1(...) [from opId="getImage_1"]
generatedRoutes.get("/api/v1/tags/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "getImage1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getImage_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getImage_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.getImage1"
    });
  }
});

// POST /api/v1/tags/{id}/image  ->  sdk.api.tagResource.setImage(...) [from opId="setImage"]
generatedRoutes.post("/api/v1/tags/:id/image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["tagResource"];
    let methodName = "setImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "setImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: setImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "tagResource.setImage"
    });
  }
});

// GET /api/v1/tasks/search  ->  sdk.api.taskResource.searchTask(...) [from opId="searchTask"]
generatedRoutes.get("/api/v1/tasks/search", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","q","priority","status","projectId","assignedTo","startDuedate","endDuedate","startCompletionTime","endCompletionTime","startCreatedTime","endCreatedTime","createdBy","lastUpdatedTime","labels"]);
    const service = (sdk.api as any)["taskResource"];
    let methodName = "searchTask";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchTask");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchTask");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "taskResource.searchTask"
    });
  }
});

// POST /api/v1/tusUpload/registration/initiate  ->  sdk.api.humanImages.registrationToken(...) [from opId="registrationToken"]
generatedRoutes.post("/api/v1/tusUpload/registration/initiate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "registrationToken";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "registrationToken");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: registrationToken");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.registrationToken"
    });
  }
});

// POST /api/v1/tusUpload/registration/submit  ->  sdk.api.humanImages.submitHuman(...) [from opId="submitHuman"]
generatedRoutes.post("/api/v1/tusUpload/registration/submit", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "submitHuman";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "submitHuman");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: submitHuman");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.submitHuman"
    });
  }
});

// POST /api/v1/tusUpload/registration/validate  ->  sdk.api.humanImages.verifyImage(...) [from opId="verifyImage"]
generatedRoutes.post("/api/v1/tusUpload/registration/validate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pose","guest","verifyWithToken"]);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "verifyImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "verifyImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: verifyImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.verifyImage"
    });
  }
});

// POST /api/v1/tusUpload/search  ->  sdk.api.humanImages.searchHuman1(...) [from opId="searchHuman_1"]
generatedRoutes.post("/api/v1/tusUpload/search", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["searchType"]);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "searchHuman1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchHuman_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchHuman_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.searchHuman1"
    });
  }
});

// DELETE /api/v1/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipDeleteRequest2(...) [from opId="handleZipDeleteRequest_2"]
generatedRoutes.delete("/api/v1/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipDeleteRequest2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipDeleteRequest_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipDeleteRequest_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipDeleteRequest2"
    });
  }
});

// GET /api/v1/tusUpload/zip-upload  ->  sdk.api.humanImages.handeleZipGetRequest2(...) [from opId="handeleZipGetRequest_2"]
generatedRoutes.get("/api/v1/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handeleZipGetRequest2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handeleZipGetRequest_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handeleZipGetRequest_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handeleZipGetRequest2"
    });
  }
});

// HEAD /api/v1/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipHeadRequest2(...) [from opId="handleZipHeadRequest_2"]
generatedRoutes.head("/api/v1/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipHeadRequest2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipHeadRequest_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipHeadRequest_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipHeadRequest2"
    });
  }
});

// PATCH /api/v1/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipPatchRequest2(...) [from opId="handleZipPatchRequest_2"]
generatedRoutes.patch("/api/v1/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPatchRequest2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPatchRequest_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPatchRequest_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPatchRequest2"
    });
  }
});

// POST /api/v1/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipPostRequest2(...) [from opId="handleZipPostRequest_2"]
generatedRoutes.post("/api/v1/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPostRequest2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPostRequest_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPostRequest_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPostRequest2"
    });
  }
});

// DELETE /api/v1/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipDeleteRequest3(...) [from opId="handleZipDeleteRequest_3"]
generatedRoutes.delete("/api/v1/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipDeleteRequest3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipDeleteRequest_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipDeleteRequest_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipDeleteRequest3"
    });
  }
});

// GET /api/v1/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handeleZipGetRequest3(...) [from opId="handeleZipGetRequest_3"]
generatedRoutes.get("/api/v1/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handeleZipGetRequest3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handeleZipGetRequest_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handeleZipGetRequest_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handeleZipGetRequest3"
    });
  }
});

// HEAD /api/v1/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipHeadRequest3(...) [from opId="handleZipHeadRequest_3"]
generatedRoutes.head("/api/v1/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipHeadRequest3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipHeadRequest_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipHeadRequest_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipHeadRequest3"
    });
  }
});

// PATCH /api/v1/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipPatchRequest3(...) [from opId="handleZipPatchRequest_3"]
generatedRoutes.patch("/api/v1/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPatchRequest3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPatchRequest_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPatchRequest_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPatchRequest3"
    });
  }
});

// POST /api/v1/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipPostRequest3(...) [from opId="handleZipPostRequest_3"]
generatedRoutes.post("/api/v1/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPostRequest3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPostRequest_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPostRequest_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPostRequest3"
    });
  }
});

// GET /api/v1/urlshortener/original-url/{shortCode}  ->  sdk.api.uRLShortener.getOriginalUrl1(...) [from opId="getOriginalUrl_1"]
generatedRoutes.get("/api/v1/urlshortener/original-url/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], []);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "getOriginalUrl1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOriginalUrl_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOriginalUrl_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.getOriginalUrl1"
    });
  }
});

// POST /api/v1/urlshortener/shorten  ->  sdk.api.uRLShortener.shorten1(...) [from opId="shorten_1"]
generatedRoutes.post("/api/v1/urlshortener/shorten", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["originalUrl","retention","unit"]);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "shorten1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "shorten_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: shorten_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.shorten1"
    });
  }
});

// GET /api/v1/urlshortener/{shortCode}  ->  sdk.api.uRLShortener.redirect(...) [from opId="redirect"]
generatedRoutes.get("/api/v1/urlshortener/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], []);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "redirect";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "redirect");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: redirect");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.redirect"
    });
  }
});

// PUT /api/v1/urlshortener/{shortCode}  ->  sdk.api.uRLShortener.updateShortenedUrl(...) [from opId="updateShortenedUrl"]
generatedRoutes.put("/api/v1/urlshortener/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], ["newOriginalUrl","retention","unit"]);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "updateShortenedUrl";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateShortenedUrl");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateShortenedUrl");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.updateShortenedUrl"
    });
  }
});

// POST /api/v1/user-info  ->  sdk.api.userInfoResource.getMultipleInfo(...) [from opId="getMultipleInfo"]
generatedRoutes.post("/api/v1/user-info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["queryBy","expandCircles"]);
    const service = (sdk.api as any)["userInfoResource"];
    let methodName = "getMultipleInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getMultipleInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getMultipleInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userInfoResource.getMultipleInfo"
    });
  }
});

// GET /api/v1/user-info/search  ->  sdk.api.userInfoResource.search1(...) [from opId="search_1"]
generatedRoutes.get("/api/v1/user-info/search", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","q","title","department","skill","interestsAndDesired","level","location","mentor","guest","matchAnd","includeProjectInfo","includeSkill","searchType","searchScope"]);
    const service = (sdk.api as any)["userInfoResource"];
    let methodName = "search1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "search_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: search_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userInfoResource.search1"
    });
  }
});

// POST /api/v1/userDevice  ->  sdk.api.userDeviceInfoResource.create2(...) [from opId="create_2"]
generatedRoutes.post("/api/v1/userDevice", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["userDeviceInfoResource"];
    let methodName = "create2";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create_2");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create_2");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userDeviceInfoResource.create2"
    });
  }
});

// PUT /api/v1/userDevice  ->  sdk.api.userDeviceInfoResource.save(...) [from opId="save"]
generatedRoutes.put("/api/v1/userDevice", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["userDeviceInfoResource"];
    let methodName = "save";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userDeviceInfoResource.save"
    });
  }
});

// GET /api/v1/users  ->  sdk.api.userManagementResource.getInfo(...) [from opId="getInfo"]
generatedRoutes.get("/api/v1/users", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","q","roles","filterName","filterValue","includeAdmins","excludeIncorrectPasswordUsers"]);
    const service = (sdk.api as any)["userManagementResource"];
    let methodName = "getInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userManagementResource.getInfo"
    });
  }
});

// POST /api/v1/vision/fingerprint  ->  sdk.api.visionEntityResource.postFingerPrint(...) [from opId="postFingerPrint"]
generatedRoutes.post("/api/v1/vision/fingerprint", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["visionEntityResource"];
    let methodName = "postFingerPrint";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "postFingerPrint");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: postFingerPrint");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visionEntityResource.postFingerPrint"
    });
  }
});

// GET /api/v1/visits  ->  sdk.api.visits.findAll1(...) [from opId="findAll_1"]
generatedRoutes.get("/api/v1/visits", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","activeOnly"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "findAll1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findAll_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findAll_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findAll1"
    });
  }
});

// POST /api/v1/visits  ->  sdk.api.visits.create1(...) [from opId="create_1"]
generatedRoutes.post("/api/v1/visits", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["groupEmailIds"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "create1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.create1"
    });
  }
});

// PUT /api/v1/visits  ->  sdk.api.visits.update(...) [from opId="update"]
generatedRoutes.put("/api/v1/visits", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["groupEmailIds"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "update";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "update");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: update");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.update"
    });
  }
});

// GET /api/v1/visits/byuser  ->  sdk.api.visits.findMy(...) [from opId="findMy"]
generatedRoutes.get("/api/v1/visits/byuser", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["activeOnly","pageable","start","finish","includeStatus","visitor"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "findMy";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findMy");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findMy");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findMy"
    });
  }
});

// GET /api/v1/visits/byvisitor/{userId}  ->  sdk.api.visits.findByVisitor(...) [from opId="findByVisitor"]
generatedRoutes.get("/api/v1/visits/byvisitor/:userId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["userId"], ["activeOnly"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "findByVisitor";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findByVisitor");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findByVisitor");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findByVisitor"
    });
  }
});

// GET /api/v1/visits/childBookings  ->  sdk.api.visits.getChildGroupBookings(...) [from opId="getChildGroupBookings"]
generatedRoutes.get("/api/v1/visits/childBookings", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["visitId"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "getChildGroupBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getChildGroupBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getChildGroupBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.getChildGroupBookings"
    });
  }
});

// GET /api/v1/visits/filteredVisits  ->  sdk.api.visits.findFilteredVisits(...) [from opId="findFilteredVisits"]
generatedRoutes.get("/api/v1/visits/filteredVisits", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["from","to","location","type"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "findFilteredVisits";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findFilteredVisits");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findFilteredVisits");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findFilteredVisits"
    });
  }
});

// POST /api/v1/visits/getAllChildBookings  ->  sdk.api.visits.getAllChildBookings(...) [from opId="getAllChildBookings"]
generatedRoutes.post("/api/v1/visits/getAllChildBookings", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["visits"];
    let methodName = "getAllChildBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllChildBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllChildBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.getAllChildBookings"
    });
  }
});

// GET /api/v1/visits/shortcode/{id}  ->  sdk.api.visits.findbyShortCode(...) [from opId="findbyShortCode"]
generatedRoutes.get("/api/v1/visits/shortcode/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["visits"];
    let methodName = "findbyShortCode";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findbyShortCode");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findbyShortCode");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findbyShortCode"
    });
  }
});

// POST /api/v1/visits/upcomingVisitExpiry/{code}  ->  sdk.api.visits.upcomingVisitExpire(...) [from opId="upcomingVisitExpire"]
generatedRoutes.post("/api/v1/visits/upcomingVisitExpiry/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["visits"];
    let methodName = "upcomingVisitExpire";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "upcomingVisitExpire");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: upcomingVisitExpire");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.upcomingVisitExpire"
    });
  }
});

// DELETE /api/v1/visits/{id}  ->  sdk.api.visits.deleteVisit(...) [from opId="deleteVisit"]
generatedRoutes.delete("/api/v1/visits/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["hard"]);
    const service = (sdk.api as any)["visits"];
    let methodName = "deleteVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.deleteVisit"
    });
  }
});

// GET /api/v1/visits/{id}  ->  sdk.api.visits.findVisitById(...) [from opId="findVisitById"]
generatedRoutes.get("/api/v1/visits/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["visits"];
    let methodName = "findVisitById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findVisitById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findVisitById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "visits.findVisitById"
    });
  }
});

// GET /api/v1/zone/{id}/boundary  ->  sdk.api.locationGeoJsonConfiguration.getZoneBoundary(...) [from opId="getZoneBoundary"]
generatedRoutes.get("/api/v1/zone/:id/boundary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getZoneBoundary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getZoneBoundary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getZoneBoundary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getZoneBoundary"
    });
  }
});

// GET /api/v1/zone/{id}/export/boundary  ->  sdk.api.locationGeoJsonConfiguration.exportZoneBoundary(...) [from opId="exportZoneBoundary"]
generatedRoutes.get("/api/v1/zone/:id/export/boundary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "exportZoneBoundary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "exportZoneBoundary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: exportZoneBoundary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.exportZoneBoundary"
    });
  }
});

// POST /api/v1/zone/{id}/import/boundary  ->  sdk.api.locationGeoJsonConfiguration.importZoneBoundary(...) [from opId="importZoneBoundary"]
generatedRoutes.post("/api/v1/zone/:id/import/boundary", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "importZoneBoundary";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "importZoneBoundary");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: importZoneBoundary");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.importZoneBoundary"
    });
  }
});

// GET /api/v1/zone/{id}/vertices  ->  sdk.api.locationGeoJsonConfiguration.getZoneVertices(...) [from opId="getZoneVertices"]
generatedRoutes.get("/api/v1/zone/:id/vertices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "getZoneVertices";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getZoneVertices");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getZoneVertices");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.getZoneVertices"
    });
  }
});

// PUT /api/v1/zone/{id}/vertices  ->  sdk.api.locationGeoJsonConfiguration.saveZoneVertices(...) [from opId="saveZoneVertices"]
generatedRoutes.put("/api/v1/zone/:id/vertices", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["locationGeoJsonConfiguration"];
    let methodName = "saveZoneVertices";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveZoneVertices");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveZoneVertices");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "locationGeoJsonConfiguration.saveZoneVertices"
    });
  }
});

// GET /public/booking/{code}  ->  sdk.api.publicHybridResource.getBooking(...) [from opId="getBooking"]
generatedRoutes.get("/public/booking/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "getBooking";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getBooking");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getBooking");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.getBooking"
    });
  }
});

// POST /public/booking/{code}  ->  sdk.api.publicHybridResource.checkin(...) [from opId="checkin"]
generatedRoutes.post("/public/booking/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "checkin";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkin");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkin");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.checkin"
    });
  }
});

// GET /public/boxOrHybridProfileActiveStats  ->  sdk.api.publicResource.isBoxOrHybridProfileActive(...) [from opId="isBoxOrHybridProfileActive"]
generatedRoutes.get("/public/boxOrHybridProfileActiveStats", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "isBoxOrHybridProfileActive";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "isBoxOrHybridProfileActive");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: isBoxOrHybridProfileActive");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.isBoxOrHybridProfileActive"
    });
  }
});

// GET /public/branding  ->  sdk.api.publicBrandingResource.getBranding(...) [from opId="getBranding"]
generatedRoutes.get("/public/branding", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicBrandingResource"];
    let methodName = "getBranding";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getBranding");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getBranding");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicBrandingResource.getBranding"
    });
  }
});

// GET /public/camera/event/camera/history/{customerId}  ->  sdk.api.cameraMetricResource.getHistory1(...) [from opId="getHistory_1"]
generatedRoutes.get("/public/camera/event/camera/history/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["cameraMetricResource"];
    let methodName = "getHistory1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHistory_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHistory_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraMetricResource.getHistory1"
    });
  }
});

// GET /public/camera/event/history/{customerId}/excel  ->  sdk.api.cameraMetricResource.getHistoryExcel1(...) [from opId="getHistoryExcel_1"]
generatedRoutes.get("/public/camera/event/history/:customerId/excel", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["cameraMetricResource"];
    let methodName = "getHistoryExcel1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHistoryExcel_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHistoryExcel_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraMetricResource.getHistoryExcel1"
    });
  }
});

// GET /public/camera/live/{customerId}  ->  sdk.api.cameraMetricResource.getLiveData1(...) [from opId="getLiveData_1"]
generatedRoutes.get("/public/camera/live/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], ["ignoreCurrent","byCamera","byDay","byPeriod"]);
    const service = (sdk.api as any)["cameraMetricResource"];
    let methodName = "getLiveData1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLiveData_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLiveData_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "cameraMetricResource.getLiveData1"
    });
  }
});

// GET /public/catering/orders  ->  sdk.api.publicCateringOrderResource.findAll(...) [from opId="findAll"]
generatedRoutes.get("/public/catering/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "findAll";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findAll");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findAll");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.findAll"
    });
  }
});

// POST /public/catering/orders  ->  sdk.api.publicCateringOrderResource.save3(...) [from opId="save_3"]
generatedRoutes.post("/public/catering/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "save3";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "save_3");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: save_3");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.save3"
    });
  }
});

// DELETE /public/catering/orders/delete/{id}  ->  sdk.api.publicCateringOrderResource.deleteOrder(...) [from opId="deleteOrder"]
generatedRoutes.delete("/public/catering/orders/delete/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "deleteOrder";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "deleteOrder");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: deleteOrder");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.deleteOrder"
    });
  }
});

// GET /public/catering/orders/status  ->  sdk.api.publicCateringOrderResource.findByStatus(...) [from opId="findByStatus"]
generatedRoutes.get("/public/catering/orders/status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["status"]);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "findByStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findByStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findByStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.findByStatus"
    });
  }
});

// PATCH /public/catering/orders/update/{id}  ->  sdk.api.publicCateringOrderResource.updateByStatus(...) [from opId="updateByStatus"]
generatedRoutes.patch("/public/catering/orders/update/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], ["status"]);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "updateByStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateByStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateByStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.updateByStatus"
    });
  }
});

// GET /public/catering/orders/user/{email}  ->  sdk.api.publicCateringOrderResource.getOrderByEmail(...) [from opId="getOrderByEmail"]
generatedRoutes.get("/public/catering/orders/user/:email", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["email"], []);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "getOrderByEmail";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOrderByEmail");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOrderByEmail");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.getOrderByEmail"
    });
  }
});

// GET /public/catering/orders/{id}  ->  sdk.api.publicCateringOrderResource.findById(...) [from opId="findById"]
generatedRoutes.get("/public/catering/orders/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicCateringOrderResource"];
    let methodName = "findById";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "findById");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: findById");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicCateringOrderResource.findById"
    });
  }
});

// POST /public/check-in  ->  sdk.api.publicResource.checkIn(...) [from opId="checkIn"]
generatedRoutes.post("/public/check-in", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "checkIn";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkIn");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkIn");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.checkIn"
    });
  }
});

// POST /public/check-out  ->  sdk.api.publicResource.checkOut(...) [from opId="checkOut"]
generatedRoutes.post("/public/check-out", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "checkOut";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkOut");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkOut");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.checkOut"
    });
  }
});

// GET /public/customer/{customerId}  ->  sdk.api.sensorMetricsResource.check(...) [from opId="check"]
generatedRoutes.get("/public/customer/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "check";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "check");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: check");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.check"
    });
  }
});

// POST /public/event  ->  sdk.api.slackController.event1(...) [from opId="event_1"]
generatedRoutes.post("/public/event", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["slackController"];
    let methodName = "event1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "event_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: event_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "slackController.event1"
    });
  }
});

// GET /public/event/history/{customerId}  ->  sdk.api.sensorMetricsResource.getHistory(...) [from opId="getHistory"]
generatedRoutes.get("/public/event/history/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getHistory";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHistory");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHistory");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getHistory"
    });
  }
});

// GET /public/event/history/{customerId}/excel  ->  sdk.api.sensorMetricsResource.getHistoryExcel(...) [from opId="getHistoryExcel"]
generatedRoutes.get("/public/event/history/:customerId/excel", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getHistoryExcel";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHistoryExcel");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHistoryExcel");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getHistoryExcel"
    });
  }
});

// GET /public/event/history/{customerId}/floormap  ->  sdk.api.sensorMetricsResource.getSystemImage(...) [from opId="getSystemImage"]
generatedRoutes.get("/public/event/history/:customerId/floormap", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], []);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getSystemImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSystemImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSystemImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getSystemImage"
    });
  }
});

// GET /public/external-authentication-methods  ->  sdk.api.publicResource.oauthRegistrations(...) [from opId="oauthRegistrations"]
generatedRoutes.get("/public/external-authentication-methods", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "oauthRegistrations";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "oauthRegistrations");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: oauthRegistrations");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.oauthRegistrations"
    });
  }
});

// GET /public/file/{id}  ->  sdk.api.publicResource.getFile(...) [from opId="getFile"]
generatedRoutes.get("/public/file/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getFile";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFile");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFile");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getFile"
    });
  }
});

// GET /public/flink/jobStatus  ->  sdk.api.publicResource.getFlinkJobStatus(...) [from opId="getFlinkJobStatus"]
generatedRoutes.get("/public/flink/jobStatus", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getFlinkJobStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFlinkJobStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFlinkJobStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getFlinkJobStatus"
    });
  }
});

// GET /public/get-frs-setting  ->  sdk.api.publicResource.getFRSSettings(...) [from opId="getFRSSettings"]
generatedRoutes.get("/public/get-frs-setting", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getFRSSettings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getFRSSettings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getFRSSettings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getFRSSettings"
    });
  }
});

// GET /public/get-image/{id}  ->  sdk.api.publicResource.getImageFile(...) [from opId="getImageFile"]
generatedRoutes.get("/public/get-image/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getImageFile";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getImageFile");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getImageFile");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getImageFile"
    });
  }
});

// POST /public/get-status  ->  sdk.api.publicResource.getStatus(...) [from opId="getStatus"]
generatedRoutes.post("/public/get-status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getStatus"
    });
  }
});

// POST /public/github/webhook/{projectId}  ->  sdk.api.publicWebhookResource.githubWebhook(...) [from opId="githubWebhook"]
generatedRoutes.post("/public/github/webhook/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["projectId"], []);
    const service = (sdk.api as any)["publicWebhookResource"];
    let methodName = "githubWebhook";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "githubWebhook");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: githubWebhook");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicWebhookResource.githubWebhook"
    });
  }
});

// POST /public/google/event  ->  sdk.api.googleController.event(...) [from opId="event"]
generatedRoutes.post("/public/google/event", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["googleController"];
    let methodName = "event";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "event");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: event");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "googleController.event"
    });
  }
});

// GET /public/guest/checkin  ->  sdk.api.questionaireResource.checkinGuest(...) [from opId="checkinGuest"]
generatedRoutes.get("/public/guest/checkin", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["shortcode"]);
    const service = (sdk.api as any)["questionaireResource"];
    let methodName = "checkinGuest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkinGuest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkinGuest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "questionaireResource.checkinGuest"
    });
  }
});

// GET /public/health  ->  sdk.api.publicResource.getHealth(...) [from opId="getHealth"]
generatedRoutes.get("/public/health", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getHealth";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getHealth");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getHealth");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getHealth"
    });
  }
});

// GET /public/image/{id}  ->  sdk.api.publicResource.getImage(...) [from opId="getImage"]
generatedRoutes.get("/public/image/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getImage";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getImage");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getImage");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getImage"
    });
  }
});

// POST /public/infospot/update/kloudroom/{infospotId}  ->  sdk.api.publicResource.updateKloudRoomUserInfo(...) [from opId="updateKloudRoomUserInfo"]
generatedRoutes.post("/public/infospot/update/kloudroom/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["infospotId"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "updateKloudRoomUserInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateKloudRoomUserInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateKloudRoomUserInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.updateKloudRoomUserInfo"
    });
  }
});

// GET /public/infospots  ->  sdk.api.publicHybridResource.infospots(...) [from opId="infospots"]
generatedRoutes.get("/public/infospots", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "infospots";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "infospots");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: infospots");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.infospots"
    });
  }
});

// POST /public/jira/webhook/{projectId}  ->  sdk.api.publicWebhookResource.jiraWebhook(...) [from opId="jiraWebhook"]
generatedRoutes.post("/public/jira/webhook/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["projectId"], []);
    const service = (sdk.api as any)["publicWebhookResource"];
    let methodName = "jiraWebhook";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "jiraWebhook");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: jiraWebhook");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicWebhookResource.jiraWebhook"
    });
  }
});

// GET /public/locations/{id}  ->  sdk.api.publicResource.getLocation(...) [from opId="getLocation"]
generatedRoutes.get("/public/locations/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["id"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getLocation";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLocation");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLocation");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getLocation"
    });
  }
});

// GET /public/login-logo  ->  sdk.api.publicResource.geLangLoginLogo(...) [from opId="geLangLoginLogo"]
generatedRoutes.get("/public/login-logo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["lang"]);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "geLangLoginLogo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "geLangLoginLogo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: geLangLoginLogo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.geLangLoginLogo"
    });
  }
});

// POST /public/ms/change-notification  ->  sdk.api.publicTeamsResource.msGraphChangeNotification(...) [from opId="msGraphChangeNotification"]
generatedRoutes.post("/public/ms/change-notification", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["validationToken"]);
    const service = (sdk.api as any)["publicTeamsResource"];
    let methodName = "msGraphChangeNotification";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "msGraphChangeNotification");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: msGraphChangeNotification");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicTeamsResource.msGraphChangeNotification"
    });
  }
});

// POST /public/msgraph  ->  sdk.api.eventMonitoring.handleNotification1(...) [from opId="handleNotification_1"]
generatedRoutes.post("/public/msgraph", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["validationToken"]);
    const service = (sdk.api as any)["eventMonitoring"];
    let methodName = "handleNotification1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleNotification_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleNotification_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "eventMonitoring.handleNotification1"
    });
  }
});

// GET /public/paths  ->  sdk.api.publicResource.getPathInfo(...) [from opId="getPathInfo"]
generatedRoutes.get("/public/paths", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getPathInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getPathInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getPathInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getPathInfo"
    });
  }
});

// GET /public/ping  ->  sdk.api.publicResource.ping(...) [from opId="ping"]
generatedRoutes.get("/public/ping", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "ping";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "ping");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: ping");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.ping"
    });
  }
});

// POST /public/questionnaire  ->  sdk.api.questionaireResource.create(...) [from opId="create"]
generatedRoutes.post("/public/questionnaire", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["questionaireResource"];
    let methodName = "create";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "create");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: create");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "questionaireResource.create"
    });
  }
});

// GET /public/questionnaire/code/{code}  ->  sdk.api.questionaireResource.getQuestionaireTemplate1(...) [from opId="getQuestionaireTemplate_1"]
generatedRoutes.get("/public/questionnaire/code/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], ["type"]);
    const service = (sdk.api as any)["questionaireResource"];
    let methodName = "getQuestionaireTemplate1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getQuestionaireTemplate_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getQuestionaireTemplate_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "questionaireResource.getQuestionaireTemplate1"
    });
  }
});

// GET /public/questionnaire/default  ->  sdk.api.questionaireResource.getQuestionaireTemplate(...) [from opId="getQuestionaireTemplate"]
generatedRoutes.get("/public/questionnaire/default", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["questionaireResource"];
    let methodName = "getQuestionaireTemplate";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getQuestionaireTemplate");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getQuestionaireTemplate");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "questionaireResource.getQuestionaireTemplate"
    });
  }
});

// GET /public/questionnaire/get-q-Def  ->  sdk.api.publicHybridResource.getQDefForUser(...) [from opId="getQDefForUser"]
generatedRoutes.get("/public/questionnaire/get-q-Def", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["user","site"]);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "getQDefForUser";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getQDefForUser");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getQDefForUser");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.getQDefForUser"
    });
  }
});

// GET /public/room-bookings/employeeinfo/{infospotid}  ->  sdk.api.publicMeetingResource.getEmployeeInfo(...) [from opId="getEmployeeInfo"]
generatedRoutes.get("/public/room-bookings/employeeinfo/:infospotid", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotid"], []);
    const service = (sdk.api as any)["publicMeetingResource"];
    let methodName = "getEmployeeInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getEmployeeInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getEmployeeInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicMeetingResource.getEmployeeInfo"
    });
  }
});

// GET /public/room-bookings/office/{infospotId}  ->  sdk.api.publicMeetingResource.getUserBookings(...) [from opId="getUserBookings"]
generatedRoutes.get("/public/room-bookings/office/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], []);
    const service = (sdk.api as any)["publicMeetingResource"];
    let methodName = "getUserBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getUserBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getUserBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicMeetingResource.getUserBookings"
    });
  }
});

// GET /public/room-bookings/{infospotId}  ->  sdk.api.publicMeetingResource.getRoomBookings(...) [from opId="getRoomBookings"]
generatedRoutes.get("/public/room-bookings/:infospotId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], []);
    const service = (sdk.api as any)["publicMeetingResource"];
    let methodName = "getRoomBookings";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getRoomBookings");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getRoomBookings");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicMeetingResource.getRoomBookings"
    });
  }
});

// GET /public/room-bookings/{infospotId}/info  ->  sdk.api.publicMeetingResource.getRoomInfo(...) [from opId="getRoomInfo"]
generatedRoutes.get("/public/room-bookings/:infospotId/info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["infospotId"], []);
    const service = (sdk.api as any)["publicMeetingResource"];
    let methodName = "getRoomInfo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getRoomInfo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getRoomInfo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicMeetingResource.getRoomInfo"
    });
  }
});

// GET /public/sensor/event/{customerId}  ->  sdk.api.sensorMetricsResource.getEvent(...) [from opId="getEvent"]
generatedRoutes.get("/public/sensor/event/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], ["byAp","byDay","byPeriod"]);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getEvent";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getEvent");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getEvent");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getEvent"
    });
  }
});

// GET /public/sensor/live/{customerId}  ->  sdk.api.sensorMetricsResource.getLiveData(...) [from opId="getLiveData"]
generatedRoutes.get("/public/sensor/live/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], ["ignoreCurrent","starts","bySession","byAp","byDay","byPeriod"]);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getLiveData";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLiveData");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLiveData");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getLiveData"
    });
  }
});

// GET /public/sensor/sessions/{customerId}  ->  sdk.api.sensorMetricsResource.getSessionData(...) [from opId="getSessionData"]
generatedRoutes.get("/public/sensor/sessions/:customerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["customerId"], ["ignoreCurrent","starts","bySession","byAp","byDay","byPeriod"]);
    const service = (sdk.api as any)["sensorMetricsResource"];
    let methodName = "getSessionData";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getSessionData");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getSessionData");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "sensorMetricsResource.getSessionData"
    });
  }
});

// GET /public/sites  ->  sdk.api.publicHybridResource.sites(...) [from opId="sites"]
generatedRoutes.get("/public/sites", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "sites";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "sites");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: sites");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.sites"
    });
  }
});

// GET /public/system-status  ->  sdk.api.monitoringResource.getPublicStatus(...) [from opId="getPublicStatus"]
generatedRoutes.get("/public/system-status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["monitoringResource"];
    let methodName = "getPublicStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getPublicStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getPublicStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "monitoringResource.getPublicStatus"
    });
  }
});

// GET /public/trello/webhook  ->  sdk.api.publicWebhookResource.trelloValidationEndpoint(...) [from opId="trelloValidationEndpoint"]
generatedRoutes.get("/public/trello/webhook", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["groupId"]);
    const service = (sdk.api as any)["publicWebhookResource"];
    let methodName = "trelloValidationEndpoint";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "trelloValidationEndpoint");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: trelloValidationEndpoint");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicWebhookResource.trelloValidationEndpoint"
    });
  }
});

// POST /public/trello/webhook  ->  sdk.api.publicWebhookResource.trelloWebhook(...) [from opId="trelloWebhook"]
generatedRoutes.post("/public/trello/webhook", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["groupId"]);
    const service = (sdk.api as any)["publicWebhookResource"];
    let methodName = "trelloWebhook";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "trelloWebhook");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: trelloWebhook");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicWebhookResource.trelloWebhook"
    });
  }
});

// POST /public/tusUpload/registration/initiate  ->  sdk.api.humanImages.registrationToken1(...) [from opId="registrationToken_1"]
generatedRoutes.post("/public/tusUpload/registration/initiate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "registrationToken1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "registrationToken_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: registrationToken_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.registrationToken1"
    });
  }
});

// POST /public/tusUpload/registration/submit  ->  sdk.api.humanImages.submitHuman1(...) [from opId="submitHuman_1"]
generatedRoutes.post("/public/tusUpload/registration/submit", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "submitHuman1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "submitHuman_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: submitHuman_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.submitHuman1"
    });
  }
});

// POST /public/tusUpload/registration/validate  ->  sdk.api.humanImages.verifyImage1(...) [from opId="verifyImage_1"]
generatedRoutes.post("/public/tusUpload/registration/validate", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["pose","guest","verifyWithToken"]);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "verifyImage1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "verifyImage_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: verifyImage_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.verifyImage1"
    });
  }
});

// POST /public/tusUpload/search  ->  sdk.api.humanImages.searchHuman(...) [from opId="searchHuman"]
generatedRoutes.post("/public/tusUpload/search", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["searchType"]);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "searchHuman";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "searchHuman");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: searchHuman");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.searchHuman"
    });
  }
});

// DELETE /public/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipDeleteRequest1(...) [from opId="handleZipDeleteRequest_1"]
generatedRoutes.delete("/public/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipDeleteRequest1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipDeleteRequest_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipDeleteRequest_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipDeleteRequest1"
    });
  }
});

// GET /public/tusUpload/zip-upload  ->  sdk.api.humanImages.handeleZipGetRequest1(...) [from opId="handeleZipGetRequest_1"]
generatedRoutes.get("/public/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handeleZipGetRequest1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handeleZipGetRequest_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handeleZipGetRequest_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handeleZipGetRequest1"
    });
  }
});

// HEAD /public/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipHeadRequest1(...) [from opId="handleZipHeadRequest_1"]
generatedRoutes.head("/public/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipHeadRequest1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipHeadRequest_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipHeadRequest_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipHeadRequest1"
    });
  }
});

// PATCH /public/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipPatchRequest1(...) [from opId="handleZipPatchRequest_1"]
generatedRoutes.patch("/public/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPatchRequest1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPatchRequest_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPatchRequest_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPatchRequest1"
    });
  }
});

// POST /public/tusUpload/zip-upload  ->  sdk.api.humanImages.handleZipPostRequest1(...) [from opId="handleZipPostRequest_1"]
generatedRoutes.post("/public/tusUpload/zip-upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPostRequest1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPostRequest_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPostRequest_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPostRequest1"
    });
  }
});

// DELETE /public/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipDeleteRequest(...) [from opId="handleZipDeleteRequest"]
generatedRoutes.delete("/public/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipDeleteRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipDeleteRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipDeleteRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipDeleteRequest"
    });
  }
});

// GET /public/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handeleZipGetRequest(...) [from opId="handeleZipGetRequest"]
generatedRoutes.get("/public/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handeleZipGetRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handeleZipGetRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handeleZipGetRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handeleZipGetRequest"
    });
  }
});

// HEAD /public/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipHeadRequest(...) [from opId="handleZipHeadRequest"]
generatedRoutes.head("/public/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipHeadRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipHeadRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipHeadRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipHeadRequest"
    });
  }
});

// PATCH /public/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipPatchRequest(...) [from opId="handleZipPatchRequest"]
generatedRoutes.patch("/public/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPatchRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPatchRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPatchRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPatchRequest"
    });
  }
});

// POST /public/tusUpload/zip-upload/**  ->  sdk.api.humanImages.handleZipPostRequest(...) [from opId="handleZipPostRequest"]
generatedRoutes.post("/public/tusUpload/zip-upload/**", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["humanImages"];
    let methodName = "handleZipPostRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleZipPostRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleZipPostRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "humanImages.handleZipPostRequest"
    });
  }
});

// POST /public/update-visitor  ->  sdk.api.publicVisits.updateVistor(...) [from opId="updateVistor"]
generatedRoutes.post("/public/update-visitor", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "updateVistor";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateVistor");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateVistor");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.updateVistor"
    });
  }
});

// GET /public/urlshortener/original-url/{shortCode}  ->  sdk.api.uRLShortener.getOriginalUrl(...) [from opId="getOriginalUrl"]
generatedRoutes.get("/public/urlshortener/original-url/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], []);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "getOriginalUrl";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getOriginalUrl");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getOriginalUrl");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.getOriginalUrl"
    });
  }
});

// POST /public/urlshortener/shorten  ->  sdk.api.uRLShortener.shorten(...) [from opId="shorten"]
generatedRoutes.post("/public/urlshortener/shorten", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["originalUrl","retention","unit"]);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "shorten";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "shorten");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: shorten");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.shorten"
    });
  }
});

// GET /public/urlshortener/{shortCode}  ->  sdk.api.uRLShortener.redirect1(...) [from opId="redirect_1"]
generatedRoutes.get("/public/urlshortener/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], []);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "redirect1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "redirect_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: redirect_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.redirect1"
    });
  }
});

// PUT /public/urlshortener/{shortCode}  ->  sdk.api.uRLShortener.updateShortenedUrl1(...) [from opId="updateShortenedUrl_1"]
generatedRoutes.put("/public/urlshortener/:shortCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["shortCode"], ["newOriginalUrl","retention","unit"]);
    const service = (sdk.api as any)["uRLShortener"];
    let methodName = "updateShortenedUrl1";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "updateShortenedUrl_1");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: updateShortenedUrl_1");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "uRLShortener.updateShortenedUrl1"
    });
  }
});

// GET /public/user-info/qs  ->  sdk.api.publicVisits.quickSearch(...) [from opId="quickSearch"]
generatedRoutes.get("/public/user-info/qs", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["q","size","guest","includeBooking"]);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "quickSearch";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "quickSearch");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: quickSearch");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.quickSearch"
    });
  }
});

// GET /public/user-info/search  ->  sdk.api.userInfoResource.search(...) [from opId="search"]
generatedRoutes.get("/public/user-info/search", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["pageable","q","title","department","skill","interestsAndDesired","level","location","mentor","guest","matchAnd","includeProjectInfo","includeSkill","searchType","searchScope"]);
    const service = (sdk.api as any)["userInfoResource"];
    let methodName = "search";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "search");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: search");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userInfoResource.search"
    });
  }
});

// POST /public/user/{email}/quickbooking/{siteid}  ->  sdk.api.publicHybridResource.quickKioskAction(...) [from opId="quickKioskAction"]
generatedRoutes.post("/public/user/:email/quickbooking/:siteid", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["email","siteid"], []);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "quickKioskAction";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "quickKioskAction");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: quickKioskAction");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.quickKioskAction"
    });
  }
});

// GET /public/users/departments  ->  sdk.api.userManagementResource.getAllDepartments(...) [from opId="getAllDepartments"]
generatedRoutes.get("/public/users/departments", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["userManagementResource"];
    let methodName = "getAllDepartments";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getAllDepartments");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getAllDepartments");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "userManagementResource.getAllDepartments"
    });
  }
});

// GET /public/v2-system-theme-settings  ->  sdk.api.publicResource.getV2SystemThemeSetting(...) [from opId="getV2SystemThemeSetting"]
generatedRoutes.get("/public/v2-system-theme-settings", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getV2SystemThemeSetting";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getV2SystemThemeSetting");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getV2SystemThemeSetting");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getV2SystemThemeSetting"
    });
  }
});

// GET /public/valet  ->  sdk.api.publicVisits.valetRequest(...) [from opId="valetRequest"]
generatedRoutes.get("/public/valet", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["email"]);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "valetRequest";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "valetRequest");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: valetRequest");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.valetRequest"
    });
  }
});

// POST /public/vision/media/{cameraId}/{mediaRefId}/status  ->  sdk.api.publicResource.mediaCaptureStatus(...) [from opId="mediaCaptureStatus"]
generatedRoutes.post("/public/vision/media/:cameraId/:mediaRefId/status", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["cameraId","mediaRefId"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "mediaCaptureStatus";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "mediaCaptureStatus");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: mediaCaptureStatus");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.mediaCaptureStatus"
    });
  }
});

// POST /public/vision/saveMedia/{type}/{key}  ->  sdk.api.publicResource.saveMedia(...) [from opId="saveMedia"]
generatedRoutes.post("/public/vision/saveMedia/:type/:key", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["type","key"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "saveMedia";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "saveMedia");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: saveMedia");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.saveMedia"
    });
  }
});

// GET /public/visit-terms  ->  sdk.api.publicVisits.getTermsAndConditions(...) [from opId="getTermsAndConditions"]
generatedRoutes.get("/public/visit-terms", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "getTermsAndConditions";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getTermsAndConditions");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getTermsAndConditions");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.getTermsAndConditions"
    });
  }
});

// PUT /public/visit/approve  ->  sdk.api.publicVisits.approveVisit(...) [from opId="approveVisit"]
generatedRoutes.put("/public/visit/approve", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["bookingCode"]);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "approveVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "approveVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: approveVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.approveVisit"
    });
  }
});

// POST /public/visit/checkin/{code}  ->  sdk.api.publicVisits.checkinToVisit(...) [from opId="checkinToVisit"]
generatedRoutes.post("/public/visit/checkin/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "checkinToVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkinToVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkinToVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.checkinToVisit"
    });
  }
});

// POST /public/visit/checkout/{code}  ->  sdk.api.publicVisits.checkoutOfVisit(...) [from opId="checkoutOfVisit"]
generatedRoutes.post("/public/visit/checkout/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "checkoutOfVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "checkoutOfVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: checkoutOfVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.checkoutOfVisit"
    });
  }
});

// POST /public/visit/create  ->  sdk.api.publicVisits.createVisit(...) [from opId="createVisit"]
generatedRoutes.post("/public/visit/create", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], ["userId"]);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "createVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "createVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: createVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.createVisit"
    });
  }
});

// PUT /public/visit/edit  ->  sdk.api.publicVisits.editVisit(...) [from opId="editVisit"]
generatedRoutes.put("/public/visit/edit", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, [], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "editVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "editVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: editVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.editVisit"
    });
  }
});

// PUT /public/visit/reject  ->  sdk.api.publicVisits.rejectVisit(...) [from opId="rejectVisit"]
generatedRoutes.put("/public/visit/reject", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["bookingCode"]);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "rejectVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "rejectVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: rejectVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.rejectVisit"
    });
  }
});

// GET /public/visit/{code}  ->  sdk.api.publicVisits.getVisit(...) [from opId="getVisit"]
generatedRoutes.get("/public/visit/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "getVisit";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getVisit");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getVisit");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.getVisit"
    });
  }
});

// GET /public/visitCode  ->  sdk.api.publicResource.getVisitCode(...) [from opId="getVisitCode"]
generatedRoutes.get("/public/visitCode", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["checkIn","email"]);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getVisitCode";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getVisitCode");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getVisitCode");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getVisitCode"
    });
  }
});

// GET /public/visitor-picture/{code}  ->  sdk.api.publicVisits.getVisitorPicture(...) [from opId="getVisitorPicture"]
generatedRoutes.get("/public/visitor-picture/:code", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["code"], []);
    const service = (sdk.api as any)["publicVisits"];
    let methodName = "getVisitorPicture";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getVisitorPicture");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getVisitorPicture");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicVisits.getVisitorPicture"
    });
  }
});

// GET /public/visitorarrived  ->  sdk.api.publicHybridResource.visitorArrived(...) [from opId="visitorArrived"]
generatedRoutes.get("/public/visitorarrived", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, [], ["email","siteId"]);
    const service = (sdk.api as any)["publicHybridResource"];
    let methodName = "visitorArrived";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "visitorArrived");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: visitorArrived");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicHybridResource.visitorArrived"
    });
  }
});

// GET /public/widget-locale/{lang}  ->  sdk.api.publicResource.getLoginLogo(...) [from opId="getLoginLogo"]
generatedRoutes.get("/public/widget-locale/:lang", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, false, ["lang"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "getLoginLogo";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "getLoginLogo");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: getLoginLogo");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.getLoginLogo"
    });
  }
});

// POST /public/wrike/webhook/{projectId}  ->  sdk.api.publicWebhookResource.wrikeWebhook(...) [from opId="wrikeWebhook"]
generatedRoutes.post("/public/wrike/webhook/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["projectId"], []);
    const service = (sdk.api as any)["publicWebhookResource"];
    let methodName = "wrikeWebhook";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "wrikeWebhook");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: wrikeWebhook");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicWebhookResource.wrikeWebhook"
    });
  }
});

// POST /public/{id}/upload  ->  sdk.api.publicResource.handleFileUpload(...) [from opId="handleFileUpload"]
generatedRoutes.post("/public/:id/upload", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const args = buildArgs(req, true, ["id"], []);
    const service = (sdk.api as any)["publicResource"];
    let methodName = "handleFileUpload";
    if (typeof service?.[methodName] !== "function") {
      const resolved = resolveSdkMethod(service, "handleFileUpload");
      if (resolved) methodName = resolved; else throw new Error("SDK method not found for operationId: handleFileUpload");
    }
    const out = await service[methodName](args);
    res.status(200).json(out ?? null);
  } catch (err: any) {
    const status = err?.status || err?.statusCode || 500;
    res.status(typeof status === "number" ? status : 500).json({
      error: err?.message || "Request failed",
      details: err?.body ?? err,
      from: "publicResource.handleFileUpload"
    });
  }
});
