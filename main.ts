interface Project {
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Whitted Ray Tracer",
    description: "A recursive ray tracer with BVH and texture support.",
    url: "https://github.com/yourname/raytracer"
  },
  {
    title: "FLIP Fluid Sim",
    description: "A WebGL fluid simulation using the FLIP method.",
    url: "https://yourname.dev/fluidsim"
  }
];

const projectList = document.getElementById("project-list")!;
projects.forEach(project => {
  const card = document.createElement("div");
  card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.url}" target="_blank">View</a>`;
  projectList.appendChild(card);
});
