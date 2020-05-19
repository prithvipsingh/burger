// Import burger.js 

var burger = require ('../models/burger.js');
var express = require('express');

// Create app router 

var router = express.Router();


// Route -- GET - SELECT ALL 
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});
// Route -- Post -- Insert 
router.post('/burgers/create', function (req, res) {
	burger.insertOne(['burger_name'], [req.body.name], function () {
		res.redirect('/burgers');
	});
});
// 