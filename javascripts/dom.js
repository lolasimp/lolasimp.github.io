const writeToDom = (input, divId) => {
  $(`#${divId}`).html(input);
};

const makeBlogs = (blogsArray) => {
  let blogString = '';
  blogsArray.forEach((blog) => {
    blogString += `<h3 class="blog-title">${blog.id}</h3>`;
    blogString += `<h5>${blog.date}</h5>`;
    blogString += `<p>${blog.entry}</p>`;
  });
  writeToDom(blogString, 'blog-main-container');
};

const makeProjects = (projectsArray) => {
  let projectString = '';
  projectString += `<div class="container-fluid">`;
  projectString +=  `<div class="row thumbnail">`;
  projectsArray.forEach((proj) => {
    projectString += `<div class="col-md-5 col-md-offset-3 project">`;
    projectString +=  `<h2 class="proj-title">${proj.title}</h2>`;
    projectString +=  `<img class="project-photo" src="${proj.photo}" alt="Project photo">`;
    projectString +=  `<h4 class="description">${proj.info}</h4>`;
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
