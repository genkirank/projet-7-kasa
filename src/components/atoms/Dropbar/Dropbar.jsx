import './Dropbar.scss'
import arrowTop from './arrow_top.png'
import React, { useState } from 'react'
import { ReactComponent as Arrow_bottom } from './Arrow_bottom.svg'
export default function Dropbar({ Data }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className='collapse'>
      <button
        className='collapse-btn'
        onClick={() => setVisible(!visible)}
      >
        <h1 className='title'>{Data}</h1>
        <img
          src={arrowTop}
          alt='Flèche haut'
          className={visible ? 'arrow active' : 'arrow'}
        />
        <Arrow_bottom className={visible ? 'arrow ' : 'arrow active'} />
      </button>
      {visible && (
        <div className='content'>
          <p>
            Restabat ut Caesar post haec properaret accitus et abstergendae causa suspicionis sororem suam, eius uxorem,
            Constantius ad se tandem desideratam venire multis fictisque blanditiis hortabatur. quae licet ambigeret
            metuens saepe cruentum, spe tamen quod eum lenire poterit ut germanum profecta, cum Bithyniam introisset, in
            statione quae Caenos Gallicanos appellatur, absumpta est vi febrium repentina. cuius post obitum maritus
            contemplans cecidisse fiduciam qua se fultum existimabat, anxia cogitatione, quid moliretur haerebat.
          </p>
        </div>
      )}
    </div>
  )
}
