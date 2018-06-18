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
