//Create express server
var express = require('express');
var approute = express();

//
approute.route('/book')
	.get(function(req, res) {
		res.send('Get a random book');
	})
	.post(function(req, res){
		res.send('Add a book');
	})
	.put(function(req, res){
		res.send('Update the book');
	});
	
	var server = approute.listen(3000, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://%s:%s', host, port);
	});