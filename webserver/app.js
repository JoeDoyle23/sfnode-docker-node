var fs = require("fs");
var logger = require("morgan");
var express = require("express");

var app = express();

app.use(logger("dev"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
	fs.createReadStream("index.html").pipe(res);
});

app.get("/bender.jpg", function(req, res) {
	fs.createReadStream("bender.jpg").pipe(res);
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function () {
	console.log("Super Awesome Server listening on port " + app.get("port"));
});
