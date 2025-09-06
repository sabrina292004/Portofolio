import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      name: 'React',
      level: 90,
      icon: '⚛️',
      description: 'Building modern web applications'
    },
    {
      name: 'JavaScript',
      level: 95,
      icon: '🟨',
      description: 'ES6+ and modern JavaScript'
    },
    {
      name: 'Node.js',
      level: 85,
      icon: '🟢',
      description: 'Server-side development'
    },
    {
      name: 'Python',
      level: 80,
      icon: '🐍',
      description: 'Backend development & automation'
    },
    {
      name: 'CSS/SCSS',
      level: 88,
      icon: '🎨',
      description: 'Responsive design & animations'
    },
    {
      name: 'MongoDB',
      level: 75,
      icon: '🍃',
      description: 'NoSQL database management'
    },
    {
      name: 'Git',
      level: 85,
      icon: '📚',
      description: 'Version control & collaboration'
    },
    {
      name: 'Docker',
      level: 70,
      icon: '🐳',
      description: 'Containerization & deployment'
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-content">
          <h2 className="text-center mb-8">My Skills</h2>
          <p className="skills-intro text-center mb-8">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card fade-in-up">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
