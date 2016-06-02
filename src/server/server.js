// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// var path = require('path');
// //touch hej.html

// //extract data from <form>
// app.use(bodyParser.urlencoded({extended: true}))


// app.listen(process.env.PORT || 4000, function() {
//   console.log('listening on 4000')
// })

// app.get(path)

// // app.set('views', './src/client/views')
// // app.set('view engine', 'ejs')
// // app.engine('html', require('ejs').renderFile);

// //app.use("node_modules", express.static(path.resolve(__dirname, '../../node_modules')))
// // app.use("app", express.static(path.resolve(__dirname, '../client/app')))

// app.get('/', (req, res) => {
//   console.log('Vad kul!!!')
//   //res.sendFile(__dirname + '../../hej.html')
//   res.sendFile(path.join(__dirname, '..', '..', 'index.html'))
// })

// app.post('/addnew', (req, res) => {
//   console.log('HELLOOOOOOOOO!')
//   console.log(req.body)
// })

"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.set('views', './src/client/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use("/node_modules", express.static(path.resolve(__dirname, '../../node_modules')));
app.use("/", express.static(path.resolve(__dirname, '../../')));
app.use("/app", express.static(path.resolve(__dirname, '../client/app/components')));
//app.use("/", express.static(path.resolve(__dirname, '../../systemjs.config.js')));
app.use("/*.html", function (req, res) {
    res.render(req.params[0] + ".html");
});
app.get('/', function (req, res) {
    res.render('index.html');
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listen to port' + port);
});







////////////////////////////////////////
// var express = require('express');
// var path = require("path");
// var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;

// var CONTACTS_COLLECTION = "contacts";

// var app = express();

// app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.json());

// //create a database variable outside of the database connectin callback to reuse the connection tool in the applicatoin
// var db;

// //Connect to the database before starting the application server
// mongodb.MongoClient.connect(process.env.MONGO_URI, function (err, database) {
// 	if (err) {
// 		console.log(err);
// 		procsess.exit(1);
// 	}

// 	//Save database object from the callback reuse
// 	db = database;
// 	console.log("Database connection ready");

// 	//Initialize the app
// 	var server = app.listen(process.env.PORT || 8080, function() {
// 		var port = server.address().port;
// 		console.log("App now running on port", port);
// 	});
// });

// //contact api routes below


// //Generic error handler used by all endpoints
// function handleError(res, reason, message, code) {
// 	console.log("ERROR " + reason);
// 	res.status(code || 500).json({"error": message});
// }

// //FUNCTIONS

// //GET: get all contacts
// app.get("/contacts", function(req, res) {
// });

// //POST: Greate a new contact
// app.post("/contacts", function(req, res) {
// });

// //Find contact by id
// app.get("/contacts/:id", function(req, res){
// });

// //Update contact by id
// app.put("/contacts/:id", function(req, res){
// });

// //Delete contact 
// app.delete("/contacts/:id", function(req, res){
// });






//////////////////////////////






//FUNGAREAR
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(4000, function () {
//   console.log('Example app listening on port 4000!');
// });
