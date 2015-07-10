// Creat express server, create request and response
var express = require('express');
var app3 = express();


app3.get('/', function (req, res) {
  res.send('Hello, My name is app2!');
});
// app1.use(express.static('public'));
app3.use(express.static('public'));
app3.use(express.static('files'));
app3.use('/static', express.static('public'));

var server = app3.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});