import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import { Animate } from 'react-simple-animate'

import { personalData } from './utils'
import './style.scss'

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(-800px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className="developerContent">Full Stack Developer</h3>
            <p>
              Full stack web developer with an emphasis in approachability to
              provide unique perspectives on how end-users interact with
              websites and software platforms. Earned a certificate in Full
              Stack Web Development from the University of Denver Coding Boot
              Camp. Inspirational problem-solver who is animate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, web3 and building projects from genesis to consumate.
            </p>{' '}
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About
