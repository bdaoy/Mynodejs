//Create express server
var express = require('express');
var appre = express();

//will match anything with an a in the route name:
appre.get(/a/, function(req, res) {
	res.send('/a');
});
 

 //will match butterfly, dragonfly; but not butterflyman, dragonfly man, and so on
 appre.get(/.*fly$/, function(req, res) {
 	res.send('/.*fly$/');

 });
 var server = appre.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});