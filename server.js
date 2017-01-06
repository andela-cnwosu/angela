var express  = require('express');
var dotenv = require('dotenv');
dotenv.load();
var app = express();
var port = process.env.PORT || 8080;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// listen (start app with node server.js)
app.listen(port);
console.log("Angela listening on port", port);


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});