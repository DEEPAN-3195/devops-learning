# W01 · Day 5 — Add an API Test

## Goal

Turn the manual `/health` check into an automated test that can run repeatedly in local development and CI.

## What I learned

Supertest sends HTTP-style requests to an Express application. Because the test imports the app object directly, it does not need a separate server listening on port `3000`.

The API exports the app with `module.exports = app`. The server starts only when `index.js` is run directly:

~~~js
if (require.main === module) {
  app.listen(PORT, () => {
    console.log("learning-api listening on http://localhost:" + PORT);
  });
}

module.exports = app;
~~~

This keeps application creation separate from network-server startup. Tests can import the app and run requests in memory.

## Test implementation

The project uses Node's built-in test runner and Supertest:

~~~js
const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../index");

test("GET /health returns a healthy status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "ok" });
});
~~~

The `test` script is:

~~~json
"test": "node --test"
~~~

## Verification evidence

The test was run with:

~~~bash
npm test
~~~

Observed result:

~~~text
tests 1
pass 1
fail 0
cancelled 0
skipped 0
todo 0
~~~

No API server was running during this test. Supertest invoked the imported Express app directly in memory.

## DevOps connection

Automated tests are repeatable evidence in the delivery pipeline. A CI system can run `npm test` after a code change and stop the pipeline when a test fails, before an unsafe build or deployment reaches the next environment.

## Completion checklist

- [x] Install Supertest as a development dependency.
- [x] Export the Express app for testing.
- [x] Keep server startup behind `require.main === module`.
- [x] Create an automated `/health` test.
- [x] Configure `npm test` with Node's test runner.
- [x] Run the test with one passing test and zero failures.
- [ ] Add the API test to continuous integration in Week 5.
