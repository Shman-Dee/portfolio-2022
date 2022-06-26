import React from 'react'
import { ImCog } from 'react-icons/im'
import './style.scss'
import { useState } from 'react'

const colorsArray = [
  {
    id: 'yellow',
    bgColor: '#E4DB03',
  },
  {
    id: 'red',
    bgColor: '#E82A2A',
  },
  {
    id: 'green',
    bgColor: '#6ac045',
  },
  {
    id: 'blue',
    bgColor: '#5078ff',
  },
]

function Theme() {
  const [theme, setCurrentTheme] = useState('yellow')
  const [toggle, setToggle] = useState(false)

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId)
    setToggle(false)
  }

  console.log(theme)

  return (
    <div className={`theme-wrapper ${toggle ? 'active' : ''}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, key) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={key}
              style={{ background: item.bgColor }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Theme
