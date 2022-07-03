import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import PageHeaderContent from '../../components/PageHeaderContent'
import { filterOptions, portfolioData } from './utils'
import './style.scss'
import { useState } from 'react'

function Portfolio() {
  const [filterValue, setFilterValue] = useState(1)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleFilter = (id) => {
    setFilterValue(id)
  }

  const filteredPortfolioDate =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue)

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
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioDate.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="google.com">
                  <img src={item.image} alt="project example" />
                </a>
              </div>
              <div className="overLay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button href={item.projectLink} target="_blank">
                      Visit
                    </button>
                    <button href={item.githubLink} target="_blank">
                      Github Repo
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
