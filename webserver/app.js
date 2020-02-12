const fs = require("fs");
const logger = require("morgan");
const express = require("express");

const app = express();

app.use(logger("dev"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  fs.createReadStream("index.html").pipe(res);
});

app.get("/bender.jpg", (req, res) => {
  fs.createReadStream("bender.jpg").pipe(res);
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Express Server listening on port ${app.get("port")}`);
});
