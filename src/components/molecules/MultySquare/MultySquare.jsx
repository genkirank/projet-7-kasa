import './MultySquare.scss'
import { useEffect, useState } from 'react'
import Square from '../../atoms/Square/Square'
import { fetchData } from '../../atoms/fetchData/fetchData'

export default function MultySquare() {
  const [items, setItems] = useState([])
  useEffect(() => {
    async function loadData() {
      const data = await fetchData('/backend.json')
      if (data && Array.isArray(data)) {
        setItems(data)
      }
    }
    loadData()
  }, [])

  return (
    <div className='wrap'>
      {items.length > 0
        ? items.map((item) => (
            <Square
              key={item.id}
              title={item.title}
            />
          ))
        : 'Chargement...'}
    </div>
  )
}
