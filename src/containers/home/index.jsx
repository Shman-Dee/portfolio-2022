import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import './style.scss'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1 className="title-text">
          Hello, I'm Andrew.
          <br />
          Full Stack Developer
        </h1>
      </div>
      <div className="contact-me">
        <div className="contact-me__buttons-wrapper">
          <button>Hire Me</button>
          <a>Download Resume</a>
        </div>
        <div className="contact-me__socials-wrapper">
          <FaLinkedin size={30} />
          <FaGithub size={30} />
        </div>
      </div>
    </section>
  )
}

export default Home
