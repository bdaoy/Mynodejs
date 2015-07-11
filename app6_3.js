//Create express user
var express = require('express');
var app6_3 = express();

var cb0 = function(req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function(req, res, next) {
	console.log('CB1');
	next();

}

app6_3.get('/example/d', [cb0, cb1], function(req, res, next) {
		console.log('response will be sent by the next function...');
		next();
}, function(req, res) {
	res.send('Hello from D!');

});
var server = app6_3.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});