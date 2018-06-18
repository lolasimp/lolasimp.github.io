// const printToDom = (domString, divId) => {
//   document.getElementById(divId).innerHTML += domString;
// };

// const linkprojects = (projects) => {
//   let domString = '';
//   for (let i = 0; i < projects.length; i++) {
//     domString += `<div class = 'projects'>`;
//     domString += `<h2>${projects[i].title}</h2>`;
//     domString += `<h4>${projects[i].date}</h4>`;
//     domString += `<img id ='photo' src= '${projects[i].photo}'>`;
//     domString += `<p>${projects[i].info}<p>`
//     domString += `</div>`;
//   }
//   printToDom(domString, 'projects-main-container');
// };

// function loadprojects () {
//   const data = JSON.parse(this.responseText);
//   linkprojects(data.projects);
// };

// function failureToExecute () {
//   console.log('Not Working!');
// };

// const startApplication = () => {
//   let myRequest = new XMLHttpRequest();
//   myRequest.addEventListener('load', loadprojects);
//   myRequest.addEventListener('error', failureToExecute);
//   myRequest.open('GET', '../json/projects.json');
//   myRequest.send();
// };

// startApplication();
