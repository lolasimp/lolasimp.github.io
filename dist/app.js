(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {setConfig,} = require('./firebaseApi');
const {blogsEvent, projectsEvent,} = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebase.initializeApp(results.firebase);
      setConfig(results.firebase);
      blogsEvent();
      projectsEvent();
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  retrieveKeys,
};

},{"./events":3,"./firebaseApi":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
const {getAllBlogs, getAllProjects,} = require('./firebaseApi');
const {makeBlogs, makeProjects,} = require('./dom');

const blogsEvent = () => {
  getAllBlogs()
    .then((results) => {
      makeBlogs(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const projectsEvent = () => {
  getAllProjects()
    .then((results) => {
      makeProjects(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  blogsEvent,
  projectsEvent,
};

},{"./dom":2,"./firebaseApi":4}],4:[function(require,module,exports){
let firebaseConfig = {};

const setConfig = (fbconfig) => {
  firebaseConfig = fbconfig;
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const blogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            blogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(blogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const projectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            projectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(projectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogs,
  getAllProjects,
};

},{}],5:[function(require,module,exports){
const {retrieveKeys,} = require('./apiKeys');

retrieveKeys();

},{"./apiKeys":1}]},{},[5]);
