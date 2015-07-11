//Create user server
var express = require('express');
var app5string= express();

// will match acd and abcd
app5string.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// will match abcd, abbcd, abbbcd, and so on
app5string.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app5string.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// will match /abe and /abcde
app5string.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});
var server = app5string.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});