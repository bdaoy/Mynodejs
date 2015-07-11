// Create express server
var express = require('express');
var app6 = express();

// 
app6.get('/example/a', function(req, res){
	res.send('Hello from A!');

});
var server = app6.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});