import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="fade-in-up">Sabrina Hossam</h1>
            <h3 className="role fade-in-up">Full Stack Developer</h3>
            <p className="bio fade-in-up">
              I'm a passionate full stack developer with 3+ years of experience creating 
              beautiful, functional, and user-centered digital experiences. I specialize 
              in React, Node.js, and modern web technologies. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p className="bio fade-in-up">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee 
              while reading about the latest trends in web development.
            </p>
            <div className="about-buttons fade-in-up">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
              <a 
                href="#projects" 
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="avatar">
                <span>SH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
