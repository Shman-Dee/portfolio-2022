import React from 'react'
import { FaBlackTie } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import PageHeaderContent from '../../components/PageHeaderContent'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { data } from './utils'

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
          >
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-component"
                contentStyle={{
                  background: 'none',
                  color: 'var(--selected-theme-main-color',
                  border: '1.5px solid var(--selected-theme-main-color)',
                }}
                date="2021 - present"
                iconStyle={{
                  background: '#181818',
                  color: 'var(--selected-theme-main-color)',
                }}
                icon={<MdWork size={40} />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="education"></div>
      </div>
    </section>
  )
}

export default Resume
