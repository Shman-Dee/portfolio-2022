import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}

export default About
