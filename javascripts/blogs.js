// const printToDom = (domString, divId) => {
//   document.getElementById(divId).innerHTML += domString;
// };

// const linkBlogs = (blogs) => {
//   let domString = '';
//   for (let i = 0; i < blogs.length; i++) {
//     domString += `<div class = "blogs">`;
//     domString += `<h1>${blogs[i].id}</h1>`;
//     domString += `<h3>${blogs[i].date}</h3>`;
//     domString += `<p>${blogs[i].entry}<p>`;
//     domString += `</div>`;
//   }
//   printToDom(domString, 'blog-main-container');
// };

// function loadBlogs () {
//   const data = JSON.parse(this.responseText);
//   linkBlogs(data.blogs);
// };

// function failureToExecute () {
//   console.log('Not Working!');
// };

// const startApplication = () => {
//   let myRequest = new XMLHttpRequest();
//   myRequest.addEventListener('load', loadBlogs);
//   myRequest.addEventListener('error', failureToExecute);
//   myRequest.open('GET', '../json/blogs.json');
//   myRequest.send();
// };

// startApplication();
