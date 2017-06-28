/*
console.log("Suck my dick");

var chatte;
chatte = "I am Edgar and I am awesome";
console.log(chatte);

var awesomeThoughts = "I am amazingly awesome bitch";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

$("#main").append(funThoughts);*/

/*
var role = "Great Lord of the world"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Edgar Girerd");
$("#header").prepend(formattedName);*/

var skills = ["Design ", "UX ", "UI ", "Project Management "];
var newSkills2 = skills.push("Awesomeness");
// var newSkills = skills.pop();
$("#main").append(skills);


var sampleArray = [0,0,7];

var increment = function(_array) {
    var newArray = [];
	newArray = _array.slice(0);
	var lastNum = newArray.pop();
	newArray.push(lastNum + 1);
};

/*var bio = {
	"name" : " Edgar",
	"role" : "Project Manager",
	"contactInfo" : "edgargirerd@gmail.com",
	"welcomeMessage" : "Hello everyone fuckin' one",
	"skills" : skills,
	"biopic" : "images/14.jpg"
}

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contactInfo);
$("#header").append(bio.welcomeMessage);
$("#header").append(bio.skills);
$("#header").append(bio.biopic);*/

/*var work = {};
work.job = "Project Manager";
work.years = 3;

var education = {};
education["school"] = "IUT SRC";
education["years"] = "3 years";

$("#main").append(work["job"]);
$("#main").append(education.school);
$("#main").append(work.years);*/

/* My first Object

var education = {
	"schools": [
		{
			"name": "High-school La Prat's",
			"city": "Cluny",
			"degree": ["Baccalaureat"]
		},
		{
			"name": "University of Dijon, IUT SRC",
			"city": "Dijon",
			"degree": ["Bachelor degree", "License"]
		}
	]
}
*/

/*function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ") //separate the original name in an array 
    names[1] = names[1].toUpperCase(); // second name all uppercase
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase(); //first name first letter capital then lowercase
    finalName = names.join(" "); //bring the separated names back together into one string
    return finalName;
};*/


// LOOP with if
var edgar = {};
edgar.job = "Project Manager";

var courses = 0;
while(edgar.job === "Project Manager"){
	console.log("Hello");
	courses = courses + 1;
	if (courses === 10){
		edgar.job = "Web Designer";
	}
}
console.log(edgar.job);

// LOOP with for
//	Initialization	Condition	Mutator	
for (var i = 0; 	i < 9; 		i++) {
	console.log(i);
};

// Locationizer of my cursor - returning the position in X and Y of my cursor everytime I click
function locationizer(work_obj) {
    var location = [];
    for (job in work_obj.jobs){
        var newLocations = work_obj.jobs[job].location;
        location.push(newLocations);
    }
    return location;
    	$(".work-entry:last").append(newLocations);

}



