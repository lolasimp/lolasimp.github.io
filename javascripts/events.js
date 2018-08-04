const {getAllBlogs,} = require('./firebaseApi');
const {makeBlogs,} = require('./dom');

const blogsEvent = () => {
  getAllBlogs()
    .then((results) => {
      makeBlogs(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

// const projectsEvent = () => {
//   getAllProjects()
//     .then((results) => {
//       makeProjects(results);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const blogsOpen = () => {
//   $(document).on('click', '.titleBtn', ((e) => {
//     const (e.target)
//   })
// };

module.exports = {
  blogsEvent,
  // projectsEvent,
  // blogsOpen,
};
