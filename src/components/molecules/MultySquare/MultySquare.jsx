import './MultySquare.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../../atoms/Square/Square'
import { fetchData } from '../../atoms/fetchData/fetchData'

export default function MultySquare() {
  const maxItem = 6
  const [items, setItems] = useState([])
  useEffect(() => {
    async function loadData() {
      const data = await fetchData('/backend.json')
      if (data && Array.isArray(data)) {
        setItems(data.slice(0, maxItem))
      }
    }
    loadData()
  }, [])

  return (
    <div className='wrap'>
      {items.length > 0
        ? items.map((item) => (
            <Link
              className='no-decoration'
              key={item.id}
              to={`/fichelogement/${item.id}`}
            >
              <Square title={item.title} />
            </Link>
          ))
        : 'Titre de la location'}
    </div>
  )
}
