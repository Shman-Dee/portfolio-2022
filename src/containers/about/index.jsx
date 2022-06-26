import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent'
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              dicta nulla quos vero corrupti facilis qui ab, inventore veniam
              exercitationem ipsa, assumenda esse? Adipisci ea cupiditate ad cum
              debitis nihil nobis placeat quidem iusto reiciendis. Quo ut nisi
              labore. Cupiditate quaerat, ab voluptatem harum ullam
              exercitationem excepturi nisi eum, rem aliquam in illum ut
              mollitia porro molestiae quae minus? Perspiciatis quae illum totam
              soluta sit aliquam atque reprehenderit, quibusdam, voluptas
              voluptates rem, enim necessitatibus culpa vel. Debitis nisi
              blanditiis facere optio sint labore nostrum, placeat dignissimos.
              Nulla dolorum similique omnis tempore ipsum laboriosam minima,
              vero fuga, ullam sint libero voluptatem, aspernatur repudiandae
              possimus consectetur? In possimus fuga eaque, harum sed aliquid
              minima eveniet autem iure incidunt obcaecati nihil est quas qui
              officiis ipsa nisi quaerat voluptatem? Vitae natus et ipsam
              inventore sequi excepturi quaerat impedit, eius quod cum ipsum
              placeat beatae soluta doloremque eum earum laborum labore eaque
              qui, recusandae tempora. Eos vel, deleniti molestiae debitis culpa
              ad eveniet dolore corrupti vero illo quo optio explicabo, enim
              accusantium totam hic similique nulla quisquam. Est eum quos quas
              excepturi cumque, accusamus magnam voluptatibus fuga
              necessitatibus ut adipisci blanditiis praesentium consectetur
              molestias dolorum atque quis consequatur sed iure harum quisquam
              unde nemo!
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
