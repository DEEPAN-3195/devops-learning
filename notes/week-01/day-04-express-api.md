# W01 · Day 4 — Build an Express API

## Goal

Build a small Node.js and Express API with health and version endpoints.

## What I learned

Express is a Node.js web framework that maps HTTP requests to route handlers. The client sends a request, Express matches the method and path, and the handler returns a response.

The project was initialized with `npm init -y`, and Express 5.3.0 was installed as a runtime dependency. The API listens on the port from `process.env.PORT` when provided and falls back to port `3000` for local development.

## API routes

| Method | Path | Purpose | Expected response |
| --- | --- | --- | --- |
| GET | `/health` | Check whether the service is responding | `{"status":"ok"}` |
| GET | `/version` | Identify the running application version | `{"name":"learning-api","version":"1.0.0"}` |

## Implementation

```js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/version", (req, res) => {
  res.json({
    name: "learning-api",
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`learning-api listening on http://localhost:${PORT}`);
});
```

The `start` script in `package.json` runs the same entry point through the standard project command:

```json
"start": "node index.js"
```

That means `npm start` is the repeatable command that tools such as CI/CD systems and hosting platforms can use.

## Verification evidence

The server started successfully with:

```text
learning-api listening on http://localhost:3000
```

The endpoints were verified with:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/version
```

Observed responses:

```json
{"status":"ok"}
{"name":"learning-api","version":"1.0.0"}
```

## DevOps connection

The health endpoint is a simple service check that can be used by a load balancer, container orchestrator, or monitoring system. The version endpoint helps identify which release is running during troubleshooting and deployment verification.

## Completion checklist

- [x] Initialize the Node.js project.
- [x] Install Express.
- [x] Create `/health` and `/version` routes.
- [x] Start the API locally.
- [x] Verify both routes with `curl`.
- [x] Understand `node index.js` versus `npm start`.
- [ ] Add an automated API test in Day 5.
