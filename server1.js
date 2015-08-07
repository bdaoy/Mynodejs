// lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

// We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
// Connection URL.This is where your mongodb server is running
var url = 'mongodb://localhost:27017/User';


var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extend: false}))

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine','ejs');


// use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log('Unable to connect to the mongodb server.Error:', err);
	}
	//HURRAY!! We are connected. :)
	console.log('connection establish to', url);
	//Get the documents collection
	var collection = db.collection('user');
	var List = db.collection('List');


	app.get('/Login', function(req, res) {
		res.render("Login.html");
	});
	app.get('/Register', function(req, res) {
		res.render("Register.html");
	});
	app.get('/List', function(req, res) {
		res.render("List.html");
	});

	app.post('/Register', function(req, res) {
		var user ={};
		console.log("Thong bao");
		user.Username = req.body.username;
		user.Password = req.body.password;

		console.log("User name =" +user.UserName + "Your password" + user.PassWord);
		collection.insert(user, function(err, result) {
			if(err) {
				console.log(err);
			}else {
				console.log('inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
			}
		});
	});

	app.post('/Login', function(req, res) {
		console.log("Thong bao");
		var user ={};
		console.log("input: "+req.body.user);
		var userInput = req.body.user;
		var passwordInput = req.body.pass;

		collection.find({}, function(err, data) {
	        data.each(function (err, doc) {
	          if (err) {
	            console.log(err);
	          } else {
	            	
	          }
	        });
    	});
	});

	app.post('/List', function(req, res) {
		var Li = {};
		Li.list= req.body.text;
		Li.status = req.body.status;
		console.log("Your lis is :"+List.list);
		List.insert(Li, function(err, result) {
			if(err) {
				console.log(err);
			} else {
				console.log('inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
			}
		});
		res.send(200);
		

	});



	app.get('/data', function(req, res) {
		List.find({}, function(err, data) {
			if(err) {
				console.log(err);
				res.send('401');
			}else {
				var arr = [];
				data.each(function(err, doc) {
					if(err) {
						console.log(err);
					}else {
						console.log('Fetched:', doc);
						arr.push(doc);
					}
				});
				
				setTimeout(function() {
		        	res.send(arr);
		        }, 1000);

			}
		});

	});

	// app.put('/data:/id', function(req, res) {
	// 	List.update({_id: req.params.id},{$set:{list:''}}), function(err, data) {
	// 		if(err) {
	// 			console.log(err);
	// 			res.send('401');
	// 		}else {
	// 			console.log("You updated");
	// 			res.send('200');
	// 		}

	// 	});

	// });


	app.delete('/data/:id', function(req, res) {
		List.remove({_id: req.params.id}, function(err, data) {
			if(err) {
				console.log(err);
				res.send('401');
			}else {
				console.log("Your data removed");
				res.send('200');
			}

		});
	});


});
app.listen(3000, function() {
			console.log("Started on PORT 3000");
		});


// app.delete('/user/:id', function (req, res) {
//     collection.remove({_id: req.params.id }, function(err, data) {
//       if(err) {
//         console.log(err);
//         res.send('401');
//       }else {
//         console.log("Your data removed");
//         // collection.remove();
//         res.send('200');
//       }

//     });
//   }); 