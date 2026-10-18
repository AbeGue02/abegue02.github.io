const projects = [
  {
    title: 'Project One',
    description: 'Short description of the project and the tech used.',
    url: 'https://github.com/AbeGue02',
  },
  {
    title: 'Project Two',
    description: 'Short description of the project and the tech used.',
    url: 'https://github.com/AbeGue02',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">View on GitHub</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
