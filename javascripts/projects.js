var projects = [
    {
        title: "Project 1",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Project 2",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Project 3",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Project 4",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Project 5",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Project 6",
        dates: "00/00/00",
        photo: "http://placeimg.com/640/480/any",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  
];

console.log(projects)


function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById(divId);
    if(thingToPrint){
        thingToPrint.innerHTML += stringToPrint;
    }
};


function linkProjects (projectsArray){
    for (var i = 0; i < projectsArray.length; i++){    
    var projectTitle = projectsArray[i].title;
    var projectDates = projectsArray[i].dates;
    var projectPhoto = projectsArray[i].photo;
    var projectInfo = projectsArray[i].info;
    var projectString = "";
     projectString += '<div class = "projects">';
     projectString += '<h2>' + projectTitle + '</h2>';
     projectString += '<h4>' + projectDates + '</h4>';
     projectString += `<img id ="photo" src= "${projectPhoto}">`
     projectString += '<p>' + projectInfo + '<p>';
     projectString += '</div>';

       printToDom(projectString, "projects-main-container");
    };
}

linkProjects(projects);