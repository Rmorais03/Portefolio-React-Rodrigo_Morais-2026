import React from 'react';

function Projects() {
  // Array com os teus projetos de Dev / UI-UX
  const projectsData = [
    {
      id: 1,
      title: "Task Management Dashboard",
      description: "A comprehensive UI/UX prototype for a productivity app, focusing on clean data visualization and seamless user flows.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", // Imagem placeholder
      tags: ["Figma", "UI/UX", "Prototyping"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "E-Commerce Web App",
      description: "Full stack e-commerce platform built with React and Bootstrap. Features dynamic routing, shopping cart, and responsive design.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Bootstrap", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Make your own horta",
      description: "A web application fetching real-time API data to display weather forecasts with animated dynamic UI components.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "API", "CSS Animations"],
      demoLink: "#",
      codeLink: "https://github.com/Rmorais03/Plantify-Oficial"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-3">
            Featured <span className="text-neon">Projects</span>
          </h2>
          <p className="text-muted-light max-w-75 mx-auto">
            A selection of my recent work focusing on frontend development, UI/UX design, and interactive prototypes.
          </p>
        </div>

        {/* Grelha de Projetos (1 coluna mobile, 2 tablet, 3 desktop) */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectsData.map((project) => (
            <div className="col" key={project.id}>
              <div className="project-card">
                
                {/* Imagem */}
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                
                {/* Conteúdo do Cartão */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5 className="text-white fw-bold mb-3">{project.title}</h5>
                  <p className="text-muted-light flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {/* Botões/Links */}
                  <div className="d-flex gap-3 mt-auto">
                    <a href={project.demoLink} className="btn btn-neon px-3 py-1 fw-bold" style={{ fontSize: '0.85rem' }}
                    target="_blank">
                      Live Demo
                    </a>
                    <a href={project.codeLink} className="btn btn-outline-neon px-3 py-1 fw-bold" target="_blank" style={{ fontSize: '0.85rem' }}>
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;