function Projects({ language }) {
  const text = {
    ru: {
      title: 'Мои проекты'
    },

    en: {
      title: 'My Projects'
    }
  }

const projects = [
  {
    title: 'Porsche',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    link: 'https://imrkl.github.io/porsche/'
  },

  {
    title: 'Spirit Media',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    link: 'https://imrkl.github.io/Spirit-media/'
  },

  {
    title: 'Mountain Media',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    link: 'https://imrkl.github.io/Mountain-media/'
  },

  {
    title: 'Feng Shui',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    link: 'https://imrkl.github.io/Feng-Shui/'
  },

  {
    title: 'Todo App',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    link: 'https://todo-teal-nu-18.vercel.app/'
  }
]

  return (
    <section className="projects">
      <h2>{text[language].title}</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects