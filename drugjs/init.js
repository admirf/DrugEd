var mongoose = require("mongoose");
var models = require("./models");

mongoose.connect("mongodb://localhost/druged");
var db = mongoose.connection;
db.on('error', function(){
	console.log("DB not connected");
});


var LSD = new models.Drug({
	category: "hallucinogen",
	name: "LSD",
	img:"http://ih1.redbubble.net/image.14140059.9349/sticker,375x360.u6.png",
	alterNames: "Acid, LSD-25, Lysergide, Lysergic acid diethylamide",
	shapes: "Small tablets, Capsules, Gelatin squares",
	effects: "Dilated pupils, Higher or lower body temperature, Sweating or chills, Loss of appetite, Sleeplessness, Dry mouth, Tremors, Delusions, Visual hallucinations, An artificial sense of euphoria or certainty, Distortion of one’s sense of time and identity, Severe terrifying thoughts and feelings, Fear of losing control, Panic attacks, Flashbacks Severe depression, Psychosis",
	listLegalCountries: "None",
	addictive: "Not",
	physicalDependence: "Low",
	psychologicalDependence: "Low",
	users: "3.1 million(US)",
	effectDuration: "12 hours",
	effectIncubation: "Within minutes"
});

var Heroin = new models.Drug({
	category: "opioid",
	name: "Heroin",
	img:"http://webyarns.com/wonders/images/sugar4.png",
	alterNames: "Brown Sugar, Hell Dust, Junk, Horse, Smack, H",
	shapes: "Powder",
	effects: "Rush, Slowed breathing, Clouded mental functioning, Nausea, Vomiting, Sedation, Drowsiness, Hypothermia, Coma or death (due to overdose)",
	listLegalCountries: "None",
	addictive: "Very",
	physicalDependence: "Very high",
	psychologicalDependence: "Very high",
	users: "9.2 million",
	effectDuration: "4-5 hours",
	effectIncubation: "Within minutes"
});

var s1 = new models.Story({
	drug:"LSD",
	title:"My LSD abuse",
	user:"Edith",
	rating:8,
	credibility:9,
	story:"At the age of 16 I was introduced to a drug that I abused for over three years—LSD. \
	What I was unaware of was the fact that LSD is the most potent hallucinogen known to man.\
\
	The drug came on a small piece of paper no bigger than my index finger, called a blotter. \
	Fifteen minutes after putting the paper on my tongue my entire body got hot and I began to sweat.\
\
	Some other reactions that I experienced while on the drug included dilated pupils, nausea and goose bumps.\
	While high on LSD I felt like there was a huge distortion both in my mind and body. \
	The visual changes as well as the extreme changes in mood were like some strange scary trip—one \
	in which I felt like I had no control over my mind and body"
}
)

var s2 = new models.Story({
	drug:"LSD",
	title:"From LSD to rehab",
	user:"Donna",
	rating:9.5,
	credibility:8,
	story:"At 13 years of age I took my first drink and soon after was introduced to marijuana. \
	Then LSD quickly fell into my hands and I became addicted, eating it like candy.\
	One night during one of my binges I blacked out and awoke with blood all over my face and vomit \
	coming out of my mouth. By some miracle I pulled myself awake and cleaned myself up. I got into the car, \
	shaking, drove to my parent’s house. I climbed into bed with my mom and cried.\
	\
	By the age of 21, I checked into my first rehab."
}
)

var s3 = new models.Story({
	drug:"LSD",
	title:"Perilous trip",
	user:"Jenny",
	rating:8.9,
	credibility:8,
	story:"After taking the acid, I imagined that we had driven head-on into an eighteen-wheeler and were killed. \
	I could hear the screeching metal, then a dark and evil quiet. I was terrified at this point, I actually thought \
	we were dead....For a year I wouldn’t go into any cemetery because I was terrified I would find my own grave."
}
)

var s4 = new models.Story({
	drug:"Heroin",
	title:"It ravaged my life",
	user:"Alison",
	rating:9.3,
	credibility:8,
	story:"From the day I started using, I never stopped. Within one week I had gone from snorting heroin to shooting it. \
	Within one month I was addicted and going through all my money. I sold everything of value that I owned and eventually \
	everything that my mother owned. Within one year, I had lost everything.\
\
	I sold my car, lost my job, was kicked out of my mother’s house, was $25,000 in credit card debt, and living on the streets of Camden, \
	New Jersey. I lied, I stole, I cheated.\
\
	I was raped, beaten, mugged, robbed, arrested, homeless, sick and desperate. I knew that nobody could have a lifestyle like that very \
	long and I knew that death was imminent. If anything, death was better than a life as a junkie."
}
)

		
var s5 = new models.Story({
	drug:"Heroin",
	title:"Disrespectful drug",
	user:"Pete",
	rating:7,
	credibility:8,
	story:"People believe that heroin is super, but you lose everything: job, parents, friends, confidence, your home. \
	Lying and stealing become a habit. You no longer respect anyone or anything."
}
)
		

var DMT = new models.Drug({
	category: "hallucinogen",
	name: "DMT",
	img: "https://www.rcbodega.com/wp-content/uploads/2015/07/4-AcO-DMT.png",
	alterNames: "N,N-Dimethyltryptamine, Businessman's trip, Fantasia",
	shapes: "Tablet, Salt",
	effects: "Intense visuals, Altered concept of time, Stomach discomfort, Overwhelming fear, Lung irritation, Increased heart rate, Increased body temperature",
	listLegalCountries: "None",
	addictive: "Not",
	physicalDependence: "None",
	psychologicalDependence: "Low",
	users: "23 thousand",
	effectDuration: "Up to 1 hour",
	effectIncubation: "Within minutes"
});

var Zolpidem  = new models.Drug({
	category: "hypnotic",
	name: "Zolpidem ",
	img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Zolpidem_structure.svg/533px-Zolpidem_structure.svg.png",
	alterNames: "Ambien, Ambien CR, Intermezzo, Stilnox, Stilnoct, Sublinox, Zonadin, Sanval, Zolsana",
	shapes: "Tablet",
	effects: "Chest pain, Confusion, Confusion about identity, Place and time discouragement, False or unusual sense of well-being, \
	Fast irregular heartbeat, Feeling sad or empty, Fever, General feeling of discomfort, Irritability",
	listLegalCountries: "All(prescription)",
	addictive: "Moderate",
	physicalDependence: "Moderate",
	psychologicalDependence: "Moderate",
	users: "580 thousand",
	effectDuration: "2-3 hours",
	effectIncubation: "Within half an hour"
});

var Cocaine  = new models.Drug({
	category: "stimulant",
	name: "Cocaine",
	img: "http://www.homehealthtesting.com/blog/wp-content/uploads/2010/10/10scarycocaine.png",
	alterNames: "Benzoylmethylecgonine, Coke, Snow, Sniff, Blow",
	shapes: "Powder, Crystal",
	effects: "Loss of appetite, Increased heart rate, Contracted blood vessels, Increased rate of breathing, \
	Dilated pupils, Disturbed sleep patterns, Nausea, Hyperstimulation, Violent behavior, \
	Hallucinations, Hyperexcitability, Irritability, Tactile hallucination that creates the illusion of bugs burrowing under the skin, Intense euphoria, \
	Anxiety, Paranoia, Depression, Intense drug craving, Panic, Psychosis, Convulsions, Seizures, Sudden death",
	listLegalCountries: "None",
	addictive: "High",
	physicalDependence: "High",
	psychologicalDependence: "High",
	users: "Over 20 million",
	effectDuration: "5-90 minutes",
	effectIncubation: "Immediate"
});

var s6 = new models.Story({
	drug:"Cocaine",
	title:"I lost my friend",
	user:"Dwayne",
	rating:9.4,
	credibility:9,
	story:"My friend was on drugs for four years, three of which were on hard drugs such as cocaine, \
	LSD, morphine and many antidepressants and painkillers. Actually anything he could get his hands on. \
	He complained all the time of terrible pains in his body and he just got worse and worse till he finally went to see a doctor. \
	The doctor told him that there was nothing that could be done for him and that due to the deterioration of his body, \
	he would not live much longer. Within days—he was dead."
}
)

var s7 = new models.Story({
	drug:"Cocaine",
	title:"My decadence",
	user:"Susan",
	rating:8.9,
	credibility:8.7,
	story:"I had no more future. I did not see how I could escape my cocaine dependence. I was lost. \
	I was ‘exploding’ and unable to stop myself from continuing to seriously abuse cocaine. \
	I had hallucinations that animals were crawling under my skin. \
	I felt them each time I shot up and scraped myself with the point of my syringe until I started bleeding in order to make them leave. \
	I was once bleeding so heavily from this I had to be taken to the hospital."
}
)

var Cannabis  = new models.Drug({
	category: "hallucinogen",
	name: "Cannabis ",
	img:"http://images.clipartpanda.com/weed-symbol-png-554px-Cannabis_leaf_2.svg_.png",
	alterNames: "Marijuana, Hemp, Pot, Weed, Ganja",
	shapes: "Mixture of leaves",
	effects: "Rapid heart beat, Disorientation, Lack of physical coordination, Depression, Sleepiness, Panic attacks, Anxiety",
	listLegalCountries: "Bangladesh, Cambodia, Canada, Chile, England, Colombia, the Czech Republic, India, Jamaica, Mexico, Spain, Uruguay, the Netherlands, North Korea, some U.S. states",
	addictive: "Moderate",
	physicalDependence: "Moderate",
	psychologicalDependence: "Moderate",
	users: "230 million",
	effectDuration: "2-6 hours",
	effectIncubation: "Within minutes"
});

var Ecstasy  = new models.Drug({
	category: "hallucinogen",
	img:"http://36.media.tumblr.com/b5a8cdc12b64c354ebf53ebe57ebb5b8/tumblr_nn6qgk7hHm1usx0nxo1_500.png",
	name: "Ecstasy ",
	alterNames: "MDMA, Essence",
	shapes: "Tablet, Salt",
	effects: "Impaired judgment, False sense of affection, Confusion, Depression, Sleep problems, Severe anxiety, Paranoia, Drug cravings, Muscle tension, Faintness, Chills, Swelling, Involuntary teeth clenching, Blurred vision, Nausea",
	listLegalCountries: "None",
	addictive: "Moderate",
	physicalDependence: "None",
	psychologicalDependence: "Moderate",
	users: "9 million",
	effectDuration: "4-6 hours",
	effectIncubation: "30-45 minutes"
});

var CrystalMeth  = new models.Drug({
	category: "stimulant",
	img:"http://vignette2.wikia.nocookie.net/breakingbad/images/4/43/Bluemeth.png/revision/latest?cb=20130722044536",
	name: "Crystal Meth",
	alterNames: "Meth, Crank, Chalk, Speed, Methamphetamine",
	shapes: "Crystal",
	effects: "Loss of appetite, Increased heart rate, Dilation of pupils, Disturbed sleep patterns, Nausea, Violent behavior, \
	Hallucinations, Hyperexcitability, Irritability, Panic, Psychosis, Convulsions, Seizures Death from high doses, Depression",
	listLegalCountries: "None",
	addictive: "Very high",
	physicalDependence: "None",
	psychologicalDependence: "Very high",
	users: "Over 25 million",
	effectDuration: "10-20 hours",
	effectIncubation: "Within minutes"
});

var s8 = new models.Story({
	drug:"Ecstasy",
	title:"The rave drug",
	user:"Liz",
	rating:7.7,
	credibility:8.5,
	story:"At a rave party, I saw a guy who had stuffed himself with Ecstasy repeat for hours, \
	‘I am an orange, don’t peel me, I am an orange, don’t peel me.’ Another guy thought he was a fly \
	and wouldn’t stop hitting his head against a window."
}
)

var s9 = new models.Story({
	drug:"Ecstasy",
	title:"Rave drug mentality",
	user:"Pat",
	rating:8.0,
	credibility:8.2,
	story:"Rave parties are okay so long as you don’t take Ecstasy. But as soon as you start, \
	you think people who advise you to stop are idiots. You start to believe you have found \
	something great and others must not try to tell you the contrary. When you start liking Ecstasy, \
	it’s too late, you’re sunk."
}
)

var s10 = new models.Story({
	drug:"Crystal Meth",
	title:"Meth vs education",
	user:"Anne Marie",
	rating:9.23,
	credibility:9.1,
	story:"I started using crystal meth when I was a senior in high school. \
	Before my first semester of college was up, meth became such a big problem that I had to drop out. \
	I looked like I had chicken pox, from hours of staring at myself in the mirror and picking at myself. \
	I spent all my time either doing meth, or trying to get it."
}
)

var s11 = new models.Story({
	drug:"Crystal Meth",
	title:"Absolutely horrific",
	user:"Melanie",
	rating:9.6,
	credibility:9.1,
	story:"When I gave my three-year-old son some cheese to eat, I did not know that I was giving him poisoned food. \
	I was too stoned on meth to notice, until twelve hours later, that my son was deathly ill. \
	But then I was so stoned it took me two hours to figure out how to get him to the hospital five miles away. \
	By the time I got to the emergency room my boy was pronounced dead of a lethal dose \
	of ammonia hydroxide—one of the chemicals used to make meth."
}
)

var m1 = new models.Motto({
	motto: "Above the Influence."
});

var m2 = new models.Motto({
	motto: "Be Healthy, don’t do drugs."
});

var m3 = new models.Motto({
	motto: "Crack is Whack."
});

var m4 = new models.Motto({
	motto: "Don’t Huff, Don’t Puff. Keep away from that stuff!"
});

var m5 = new models.Motto({
	motto: "There is only one Antonio Montana!"
});

var m6 = new models.Motto({
	motto: "Say no to Drugs."
});

var m7 = new models.Motto({
	motto: "Stay drug free and be the best you could be."
});

m1.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m2.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m3.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m4.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m5.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m6.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

m7.save(function(err) {
	if(err) console.log("Error");
	else console.log("radi");
});

s1.save(function(err) {
	if(err) console.log("s1 failed");
	else console.log("s1 successful");
});
s2.save(function(err) {
	if(err) console.log("s2 failed");
	else console.log("s2 successful");
});
s3.save(function(err) {
	if(err) console.log("s3 failed");
	else console.log("s3 successful");
});
s4.save(function(err) {
	if(err) console.log("s4 failed");
	else console.log("s4 successful");
});
s5.save(function(err) {
	if(err) console.log("s5 failed");
	else console.log("s5 successful");
});
s6.save(function(err) {
	if(err) console.log("s6 failed");
	else console.log("s6 successful");
});
s7.save(function(err) {
	if(err) console.log("s7 failed");
	else console.log("s7 successful");
});


LSD.save(function(err) {
	if(err) console.log("LSD failed");
	else console.log("LSD successful");
});

DMT.save(function(err) {
	if(err) console.log("DMT failed");
	else console.log("DMT successful");
});

Heroin.save(function(err) {
	if(err) console.log("DMT failed");
	else console.log("DMT successful");
});

Zolpidem.save(function(err) {
	if(err) console.log("Zolpidem failed");
	else console.log("Zolpidem successful");
});

Cocaine.save(function(err) {
	if(err) console.log("Cocaine failed");
	else console.log("Cocaine successful");
});

Cannabis.save(function(err) {
	if(err) console.log("Cannabis failed");
	else console.log("Cannabis successful");
});

Ecstasy.save(function(err) {
	if(err) console.log("Ecstasy failed");
	else console.log("Ecstasy successful");
});

CrystalMeth.save(function(err) {
	if(err) console.log("CrystalMeth failed");
	else console.log("CrystalMeth successful");
});

s8.save(function(err) {
	if(err) console.log("s8 failed");
	else console.log("s8 successful");
});

s9.save(function(err) {
	if(err) console.log("s9 failed");
	else console.log("s9 successful");
});

s10.save(function(err) {
	if(err) console.log("s10 failed");
	else console.log("s10 successful");
});

s11.save(function(err) {
	if(err) console.log("s11 failed");
	else console.log("s11 successful");
});