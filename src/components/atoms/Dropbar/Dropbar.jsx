import './Dropbar.scss'
import arrowTop from './arrow_top.png'
import React, { useEffect, useState } from 'react'
import { ReactComponent as Arrow_bottom } from './Arrow_bottom.svg'
import { fetchData } from '../fetchData/fetchData'

export default function Dropbar({ itemId }) {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({ title: '', content: '' })

  useEffect(() => {
    async function loadItemData() {
      const allData = await fetchData()
      if (allData) {
        const item = allData.find((entry) => entry.id === itemId)
        if (item) {
          setData({ title: item.title, content: item.description })
        }
      }
    }
    loadItemData()
  }, [itemId])

  return (
    <div className='collapse'>
      <button
        className='collapse-btn'
        onClick={() => setVisible(!visible)}
      >
        <h1 className='title'>{data.title}</h1>
        <img
          src={arrowTop}
          alt='Flèche haut'
          className={visible ? 'arrow active' : 'arrow'}
        />
        <Arrow_bottom className={visible ? 'arrow ' : 'arrow active'} />
      </button>
      {visible && (
        <div className='content'>
          <p>{data.content}</p>
        </div>
      )}
    </div>
  )
}
