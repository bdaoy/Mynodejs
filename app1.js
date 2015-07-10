//
var express = require('express');
var app1 = express();


app1.get('/', function (req, res) {
  res.send('Hello Worldimages!');
});

app1.use(express.static('public'));

var server = app1.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});