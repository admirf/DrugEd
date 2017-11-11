var mongoose = require("mongoose");

var storySchema = new mongoose.Schema({
	title: String,
	drug: String,
	user: String,
	story: String,
	rating: Number,
	credibility: Number,
	created: { type: Date, default: Date.now }
});

var drugSchema = new mongoose.Schema({
	img: String,
	category: String,
	name: String,
	alterNames: String,
	shapes: String,
	effects: String,
	listLegalCountries: String,
	addictive: String,
	physicalDependence: String,
	psychologicalDependence: String,
	users: String,
	effectDuration: String,
	effectIncubation: String,
});

var mottoSchema = new mongoose.Schema({
	motto: String
});

module.exports = {
	Drug: mongoose.model("Drug", drugSchema),
	Story: mongoose.model("Story", storySchema),
	Motto: mongoose.model("Motto", mottoSchema)
}