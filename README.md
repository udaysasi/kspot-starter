# kspot-starter (server + ui)

This repo contains two projects:

- **server/** – Node.js Express server that exposes **all Kloudspot API endpoints** (generated from the OpenAPI spec) and uses the published **kloudspot-analytics-sdk** under the hood.
- **ui/** – Angular 19 frontend (standalone) that calls the server (via `/api/*`).

## Quick start

### 0) Prereqs
- Node **>= 20**
- NPM or PNPM
- Your Kloudspot **API key** and **secret**
- Your OpenAPI spec file (`openapi/public-api.json`)

### 1) Prepare the repo structure
```
kspot-example/
├─ openapi/
│  └─ public-api.json   # <-- put your Kloudspot OpenAPI JSON here
├─ server/
└─ ui/
```

> This starter ships a placeholder `openapi/public-api.json`. Replace it with your **real** spec.

### 2) Server: install & run (dev)
```bash
cd server
npm install
# generate routes from OpenAPI and start the server
cp .env.example .env   # fill in KLOUD_API_KEY / KLOUD_API_SECRET
npm run dev
# Server listens on http://localhost:3080
```

### 3) UI: scaffold Angular 19 and run
```bash
cd ui
npm install
npm run start
# UI at http://localhost:4200 proxies /api/* to http://localhost:3080
```

### 4) Test
Open http://localhost:4200. It calls the server endpoint which, in turn, calls Kloudspot via the SDK.

---

## What’s included

- **Route generator** (`server/scripts/generate-routes.mjs`) that reads `openapi/public-api.json` and emits `server/src/generatedRoutes.ts`, creating an Express route for each path+method that calls the matching SDK service method (`sdk.api.<service>.<operationId>`).
- **SDK bootstrap** (`server/src/sdk.ts`) that configures base URL and JWT auth (server-only secrets).
- **CORS + JSON** middleware already wired.
- **Angular 19** example component that calls `/api/v1/locations/sites` and `/api/v1/camera/analytics/distribution` with body.

## Notes

- The generated server routes mirror the **exact paths** from your OpenAPI. Because your spec already starts with `/api/v1/...`, the server mounts generated routes at the root (`/`).
- If you want to expose **only a subset** of endpoints, adapt the generator to whitelist tags/paths.
- Do **not** put API secrets in the UI; the server holds them and uses the SDK.

---

## Scripts summary

### Server
- `npm run routes:gen` – generates `src/generatedRoutes.ts` from `../openapi/public-api.json`.
- `npm run dev` – generates routes, then starts the Express server with tsx.
- `npm run build` – builds TypeScript to `dist/`.
- `npm run start` – runs the compiled server from `dist/`.

### UI
- Use Angular CLI (`ng serve`) with `proxy.conf.json` to hit the server at `http://localhost:3080`.
- A shortcut to this is added in package.json - Just run `npm run start`

---

## Contact
- **Uday Pyda** – https://www.linkedin.com/in/udaysasi/
