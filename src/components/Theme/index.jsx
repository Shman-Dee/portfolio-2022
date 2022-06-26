import React from 'react'
import { ImCog } from 'react-icons/im'
import './style.scss'

function Theme() {

  const colorsArray = [
    {
      id : 'yellow',
      bgColor : '#ffdd40'
    },
    {
      id : 'red',
      bgColor : '#E82A2A'
    },
    {
      id : 'green',
      bgColor : '#6ac045'
    },
    {
      id : 'blue',
      bgColor : '#5078ff'
    },
  ]

  return (
    <div className="theme-wrapper">
      <div className="them-wrapper__toggle-icon">
        <ImCog size={40}/>
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {
            colorsArray.map((item, key) => (
              <li key={key} style={{background : item.bgColor}}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Theme
