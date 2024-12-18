import React, { useState } from 'react'
import './Carrousel.scss'
import { ReactComponent as ArrowPrev } from '../Carrousel/carousselLeft.svg'
import { ReactComponent as ArrowNext } from '../Carrousel/rightcarousel.svg'
export default function Carrousel({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? pictures.length - 1 : index - 1))
  }

  function showNextImage() {
    setImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1))
  }

  if (!pictures || pictures.length === 0) {
    return <div>Chargement...</div>
  }

  return (
    <div className='carousel-container'>
      <button
        onClick={showPrevImage}
        className='carousel-button_prev'
      >
        <ArrowPrev />
      </button>
      <img
        src={pictures[imageIndex]}
        alt={`Image ${imageIndex + 1}`}
        className='carousel-image'
      />
      <p className='texte'>{`${imageIndex + 1}/${pictures.length}`}</p>
      <button
        onClick={showNextImage}
        className='carousel-button_next'
      >
        <ArrowNext />
      </button>
    </div>
  )
}
