//Create express
var express = require('express');
var app4 = express();

// respond with "hello world" when a GET request is made to the homepage
// GET method route
app4.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app4.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

var server = app4.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});