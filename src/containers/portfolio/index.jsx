import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import PageHeaderContent from '../../components/PageHeaderContent'
import { filterOptions, portfolioData } from './utils'
import './style.scss'
import { useState } from 'react'

function Portfolio() {
  const [filterValue, setFilterValue] = useState(1)

  const handleFilter = (id) => {
    setFilterValue(id)
  }

  console.log(filterValue)

  const filteredPortfolioDate = filterValue === 1 ? portfolioData : 
  
  portfolioData.filter(item=> item.sectionId === filterValue)

  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option, key) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioDate.map((item, key) => (
            <div key={key} className="portfolio__content__cards__item">
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
