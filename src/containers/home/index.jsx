import React from 'react'
import { Animate } from 'react-simple-animate'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
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
      <Animate
        play={true}
        duration={1.5}
        delay={1.5}
        start={{
          transform: 'translateY(600px)',
        }}
        end={{
          transform: 'translateX(0px)',
        }}
      >
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
      </Animate>
    </section>
  )
}

export default Home
