import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import PageHeaderContent from '../../components/PageHeaderContent'
import { filterOptions, portfolioData } from './utils'
import './style.scss'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option, key) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div className="portfolio__content__cards__item">
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
