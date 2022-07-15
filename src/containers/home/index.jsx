import React from 'react'
import { Animate } from 'react-simple-animate'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './style.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1 className="title-text">
          Andrew McInally
          <br />
          Web Development
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
            <Link to="/contact">Hire Me</Link>

            <a href="https://docs.google.com/document/d/13Ll1EoAU-FOsD1BAcwVg6PSMAfgM-fqnf-IBKugc4Z4/edit?usp=sharing">
              Download Resume
            </a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a
              href="https://www.linkedin.com/in/andrew-mcinally/"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/Shman-Dee"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default Home
