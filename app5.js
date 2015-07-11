//Create express server
var express = require('express');
var app5 = express();

//will match request to the root
app5.get('/', function(req, res) {
	res.send('root');

});
// will match requests to/about
app5.get('/about', function(req, res) {
	res.send('about');

});
// will match request to /random.text
app5.get('/random.text', function(req, res) {
	res.send('random.text');
});
var server = app5.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});