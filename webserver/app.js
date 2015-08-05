var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Hello from Docker');
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
	console.log("Super Awesome Server listening on port " + app.get("port"));
});
