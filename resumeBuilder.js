var bio = {
    "name": "Girevasan M",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9884616813",
        "email": "mgirevasan@gmail.com",
        "github": "girevasan",
        "twitter":"@Gire_vasan",
        "location": "New Delhi, India"
    },
    "welcomeMessage": "Our firm is seeking a creative Web Developer that can work with our software application team to achieve our business’ digital goals. The ideal candidate for this position is a hands-on professional with strong knowledge of content management platforms, and an ability to translate our business needs into client-friendly functions that will expand our website’s influence in our industry. The Web Developer will be responsible for updating our current online applications, as well as developing and implementing a usability testing process to insure that new website applications meet our company’s requirements.",
    "skills": ["C", "C++", "Java", "HTML", "Javascript","Python","Strong teamwork skills","Bachelor’s Degree in Computer Science","Ability to create support documentation for all new applications"],
    "biopic": "F:/DOWNLOADS/frontend-nanodegree-resume-master/images/me.jpg"
};

 var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var biopic = HTMLbioPic.replace("%data%",bio.biopic);
    var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var email = HTMLemail.replace("%data%",bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%",bio.contacts.github);
    var locations = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#header").prepend(formattedName,formattedRole);
    $("#header").append(welcomeMessage,biopic);

    $("#topContacts, #footerContacts").append(mobile,email,github,twitter,locations);

    // Add skills to resume
    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for(i = 0; i < bio.skills.length; i++){
            var skill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(skill);
        }
    }


var work = {
    "jobs": [{
            "employer": "Dominos",
            "title": "delivery boy",
            "location": "Chennai",
            "dates": "in progress",
            "description": "A great job description starts with a compelling summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is a good fit."
        },
        {"employer": "Pizza hut",
            "title": "delivery boy",
            "location": "ahmedabad",
            "dates": "2016-2017",
            "description": "A great job title typically includes a general term, level of experience and any special requirements. The general term will optimize your job title to show up in a general search for jobs of the same nature. The level of experience will help you attract the most qualified applicants by outlining the amount of responsibility and prior knowledge required. And if your position is specialized, consider including the specialization in the job title as well. But avoid using internal titles, abbreviations or acronyms to make sure people understand what your job posting is before clicking."}]
};
function displaywork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        formattedEmployer += HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer,formattedDates,formattedLocation,formattedDescription);
    }
}
displaywork();

var projects = {
    "projects": [{
            "title": "Multi User Blog",
            "dates": "February, 2017",
            "description": "This is a web page being hosted on Google App Engine where users can sign in and post blog posts as well as 'Like' and 'Comment' on other posts made on the blog.",
            "url": "https://github.com/girevasan/Multi-User-Blog",
            "images": []
        },
        {
            "title": "Image Compression and Decompression System",
            "dates": "February, 2016 – May, 2016",
            "description": "This is a desktop application to compress and decompress the image of any size, which provides the way to manage the size according to the need.",
            "url": "https://github.com/visheshbanga/ImageCompression",
            "images": ["images/project_1.jpg","images/project_2.jpg"]
        }
    ]
};
projects.display = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(projects.projects[i].title);
        formattedTitle.attr('href',projects.projects[i].url);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        if(projects.projects[i].images.length > 0){
           for(var j = 0; j < projects.projects[i].images.length; j++){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

var education = {
    "schools": [{
            "name": "IIT b",
            "location": "Chennai",
            "degree": "B.E",
            "majors": ["CSE"],
            "dates": "2014-2018",
            "url": "http://www.iitb.ac.in/"
        },
        {
            "name": "D.A.V. Public School",
            "location": "Chennai",
            "degree": "Class XII",
            "majors": ["Non Medical"],
            "dates": "2017-2018",
            "url": "http://www.davpsvelacherychennai.edu.in/"
        }
    ],
    "onlineCourses": [{
            "title": "Full Stack Web Development Nanodegree",
            "school": "Udacity",
            "dates": "January,2017 - May,2017",
            "url": "https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/"
        }
        ,
        {
            "title": "Front End Web Development Nanodegree",
            "school": "Udacity",
            "dates": "June,2017 - present",
            "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }
    ]
};

   $(document).click(function(loc){
   	var x=loc.pageX;
   	var y=loc.pageY;
   	logClicks(x,y);

   });

   function inName(name){
   	name=name.trim().split(" ");
   	console.log(name);
   	name[1]=name[1].toUpperCase();
   	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
   	return name[0]+" "+name[1];
   }
   education.display = function(){
    // Display schools
    var i = 0;
    var formattedDates = "";
    for(i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        formattedName = formattedName.replace('#',education.schools[i].url);
        formattedName += HTMLschoolDegree.replace("%data%",education.schools[i].degree);

        formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);

        $(".education-entry:last").append(formattedName,formattedDates,formattedLocation);

        for(var j = 0; j < education.schools[i].majors.length; j++){
            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    // Display online courses
    $("#education").append(HTMLonlineClasses);
    for(i = 0; i < education.onlineCourses.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        formattedTitle = formattedTitle.replace('#',education.onlineCourses[i].url);
        formattedTitle += HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);

        formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedTitle,formattedDates,formattedUrl);
    }
};
education.display();
   
   $("#main").append(internationalizeButton);
   $("#mapDiv").append(googleMap);

var infoWindow = new google.maps.infoWindow({
	content: name
});
   google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
});