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
