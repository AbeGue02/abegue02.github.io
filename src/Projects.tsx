const projects: any[] = [
  
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.length > 0 ?
            projects.map((project) => (
                <article className="card" key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noreferrer">View on GitHub</a>
                </article>
        )) : <p>Projects listing coming soon!</p>}
      </div>
    </section>
  )
}

export default Projects
