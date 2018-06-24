const writeToDom = (input, divId) => {
  $(`#${divId}`).html(input);
};

const makeBlogs = (blogsArray) => {
  let blogString = '';
  blogString += `<div class="row mb-2">`;
  blogsArray.forEach((blog) => {
    blogString +=  `<div class="col-md-6 ">`;
    blogString +=   `<div class="card flex-md-row mb-4 boxshadow h-md-220">`;
    blogString +=    `<div class="card-body d-flex flex-column align-items-start">`;
    blogString += `<h3 class="blog-title">${blog.title}</h3>`;
    blogString += `<h5>${blog.date}</h5>`;
    blogString += `<p>${blog.entry}</p>`;
    blogString +=    `</div>`;
    blogString +=   `</div>`;
    blogString +=  `</div>`;

  });
  blogString += `</div>`;
  writeToDom(blogString, 'blog-main-container');
};

const makeProjects = (projectsArray) => {
  let projectString = '';
  projectString += `<div class="container-fluid">`;
  projectString +=  `<div class="row thumbnail">`;
  projectsArray.forEach((project) => {
    projectString += `<div class="col-md-5 col-md-offset-3 project">`;
    projectString += `<h5 class="project-date">${project.dates}</h5>`;
    projectString +=  `<h2 class="project-title">${project.title}</h2>`;
    projectString +=  `<img class="project-photo" src="${project.photo}" alt="Project photo">`;
    projectString +=  `<h4 class="description">${project.info}</h4>`;
    projectString += `</div>`;
  });
  projectString +=  `</div>`;
  projectString += `</div>`;
  writeToDom(projectString, 'projects-main-container');
};

module.exports = {
  makeBlogs,
  makeProjects,
};
