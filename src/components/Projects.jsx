import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/johndoe/task-manager',
      liveUrl: 'https://taskmanager-demo.netlify.app',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.netlify.app',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com/johndoe/social-analytics',
      liveUrl: 'https://social-analytics-demo.netlify.app',
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-content">
          <h2 className="text-center mb-4">Featured Projects</h2>
          <p className="projects-intro text-center mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card fade-in-up ${project.featured ? 'featured' : ''}`}>
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="project-icon">🚀</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>📁</span> Code
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>🔗</span> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
