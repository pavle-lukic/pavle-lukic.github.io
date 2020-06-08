$(document).ready(function () {
  const url = 'assets/js/projects.json';
  const axiosTest = axios.get;
  let projectsArea = document.getElementById('projectsArea');
  let projectHtml = `<div class="col-lg-12 m-auto" id="projectsHeader">
  <h1 class="col-lg-12 mt-3 text-center">
    <b> PROJECTS</b>
  </h1>
  <hr/>
</div>`;
  const writeProjects = function (project) {
    return `
    <div class="project col-lg-10 m-auto">
            <h2 class="text-center">${project.name}</h2>
            <img class="img-thumbnail" src="assets/img/${
              project.pictureUrl
            }" alt="${project.name}" class="img-fluid m-auto" />
            <span class="col-md-6">
              <a href="${
                project.links.liveDemo
              }"><button class="btn btn-outline-dark btn-lg  m-3">Live Demo</button></a>
              <a href="${
                project.links.gitHub
              }"><button class="btn btn-outline-dark btn-lg m-3">GitHub Code</button></a>
            </span>
            <div class="">
              <h3>Description</h3>
              <p class="text-justify">
                ${project.description}
              </p>
            </div>
            <div>
              <h3>
                Technologies Used
              </h3>
              <p>
                ${project.technologies.join(', ')}
              </p>
            </div>
            <hr/>
          </div>`;
  };
  axiosTest(url).then(function (results) {
    const projects = [...results.data];
    console.log(projects);
    projects.forEach(function (value) {
      projectHtml += writeProjects(value);
    });
    projectsArea.innerHTML = projectHtml;
  });
});
