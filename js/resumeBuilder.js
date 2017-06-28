//My Header here
var role = "Great Lord of the world"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Edgar Girerd");
$("#header").prepend(formattedName);

var formattedImage = HTMLbioPic.replace("%data%", "images/14.jpg");
$("#header").prepend(formattedImage);


//My Object in main - technically all my datas that I will display separately later on
var education = {
	"schools" : [
		{
			"name": "High-school La Prat's",
			"location": "Cluny",
			"degree": ["Baccalaureat"],
			"dates": "2008 - 2011"
		},
		{
			"name": "University of Dijon, IUT SRC",
			"location": "Dijon",
			"degree": ["License", "DUT"],
			"dates": "2011 - 2014"
		},
		{
			"name": "One Year Internship DUETI",
			"location": "Bangkok",
			"degree": ["Bachelor degree"],
			"dates": "2014 - 2015"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title": "Aluna Festival",
			"dates": "4 months",
			"description": ["Web design", "graphic design", "UX/UI"],
			"images" : "images/aluna.jpg"
		},
		{
			"title": "2BFit",
			"dates": "2 months",
			"description": ["Web design", "Branding", "UX/UI", "Stationary design"],
			"images" : "images/2BFit.jpg"
		}

	]
}

var bio = {
			"name" : " Edgar",
			"role" : "Project Manager",
			"contactInfo" : "edgargirerd@gmail.com",
			"welcomeMessage" : "Hello everyone fuckin' one",
			"skills" : ["Project management", "Web Design", "UX/UI Design", "Videograhpy"],
			"biopic" : "images/fry.jpg"
		}

var work = {
	"jobs" : [
		{
			"position" : "Designer freelancer",
			"contactInfo" : "edgargirerd@gmail.com",
			"employer" : "Edg'Art",
			"skills" : ["Sales", "Project management", "Design"],
			"date" : "July 2015 - December 2016",
			"description" : "I worked mainly as a digital design freelancer. I was doing webdesign, graphic design (Stationary, branding, logo etc.). <br /> I also made some videography projects and worked on application design.",
			"location" : "Dijon, France"
		},
		{
			"position" : "Project Manager",
			"contactInfo" : "edgargirerd@gmail.com",
			"employer" : "KOS Design",
			"skills" : ["Sales", "Project management", "Design"],
			"date" : "January 2016 - Now",
			"description" : "I am working as a digital Project Manager.	I am managing a team of web desiners and web developpers. <br />I also take care of sales, CRM, design adjustment and reviews, videography. <br />Now building a MEAN Stack developper team!",
			"location" : "Bangkok, Thailand"
		}
	]
};

// Display my work experience here
function displayWork(){
		if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	};

	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();


// Display my projects
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			}
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();


// Display my education
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	}
}
education.display();


// Internationalize Button to make "Firstname LASTNAME"
$("#header").append(internationalizeButton);

function inName(formattedName){
    var newName = formattedName;
    var names = formattedName.split(" ") //separate the original name in an array 
    names[1] = names[1].toUpperCase(); // second name all uppercase
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase(); //first name first letter capital then lowercase
    newName = names.join(" "); //bring the separated names back together into one string
    return newName;
}


$("#mapDiv").append(googleMap);

