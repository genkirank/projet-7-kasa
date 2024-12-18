import './Dropbar.scss'
import { ReactComponent as ArrowTop } from './arrow-up.svg'
import React, { useState } from 'react'
export default function Dropbar({ title, description, equipements }) {
  const [isOpen, setIsOpen] = useState(false)
  const clickOpen = () => {
    setIsOpen(!isOpen)
  }

  const renderContent = () => {
    if (description) {
      return <p>{description}</p>
    } else if (equipements && Array.isArray(equipements)) {
      return (
        <ul>
          {equipements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    }
    return null
  }

  return (
    <div className='dropbar'>
      <button
        className='dropbar__button'
        onClick={clickOpen}
        aria-expanded={isOpen}
      >
        <h1 className='dropbar__title'>{title}</h1>
        <ArrowTop className={`dropbar__arrow ${isOpen ? 'dropbar__arrow--rotate' : ''}`} />
      </button>

      <div className={`dropbar__content ${isOpen ? 'dropbar__content--open' : ''}`}>{renderContent()}</div>
    </div>
  )
}
