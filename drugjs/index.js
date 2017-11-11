var express = require('express');
var mongoose = require('mongoose');
var models = require("./models.js");
var bodyParser = require("body-parser");
var app = express();

mongoose.connect("mongodb://localhost/druged");
var db = mongoose.connection;
db.on('error', function() {
	console.log("DB not connected");
});

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/drug", function(req, res) {
	console.log(req.body);
	models.Drug.findOne({name: req.body.name}, function(err, drug) {
		if (err) res.send({err: 1});
		else {
			console.log(drug);
			res.send(drug);
		} 
	});
});

app.post("/drugs", function(req, res) {
	console.log(req.body);
	if("category" in req.body) {
		models.Drug.find({category: req.body.category}, function(err, drugs) {
			var drugMap = {drugs: []};
			if(err) res.send({err: 1});
			else {
				drugs.forEach(function(drug) {
					drugMap.drugs.push([drug.name, drug.alterNames]);
				});
				res.send(drugMap)
				console.log(drugMap);
			}
		});
	} else {
		res.send({err: 1});
	}
});

app.get("/stories", function(req, res) {
	models.Story.find({}, function(err, stories) {
		console.log(stories);
		res.send(stories);
	});
});

app.post("/story", function(req, res) {
	models.Story.findOne({_id: req.body._id}, function(err, story) {
		res.send(story);
	});
});

app.post("/stories", function(req, res) {
	models.Story.find({drug: req.body.drug}, function(err, stories) {
		if(err) {
			console.log("Error");
			res.send({err: 1});
		} else {
			res.send(stories);
		}
	});
});

app.get("/motto", function(req, res) {
	models.Motto.count().exec(function(err, count) {
		var random = Math.floor(Math.random() * count);
		models.Motto.findOne().skip(random).exec(function(err, motto) {
			res.send(motto);
		});
	});
});

app.post("/rate", function(req, res) {
	var id = req.body._id;
	var val = req.body.value;
	models.Story.findOne({_id: id}, function(err, story) {
		story.rating = (story.rating + val)/2.0;
		story.save(function(err) {
			if(err) {
				console.log("Znas u cemu je problem.");
			}
		});
	});
	res.send({});
});

var server = app.listen(1488, function() {
	console.log("Server up and running...");
});