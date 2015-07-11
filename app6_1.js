// Creat express server
var express = require('express');
var app6_1 = express();

//
app6_1.get('/example/b',function(req, res, next) {
	console.log('response will be sent by the next function....');
	next();
}, function(req, res) {
	res.send('Hello from B')

});
var server = app6_1.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});