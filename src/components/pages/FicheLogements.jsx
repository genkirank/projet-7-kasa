import { useParams } from 'react-router-dom'
import Dropbar from '../atoms/Dropbar/Dropbar'
import Carrousel from '../atoms/Carrousel/Carrousel'
import { useEffect, useState } from 'react'
import { fetchData } from '../atoms/fetchData/fetchData'
import '../../assets/FicheLogement.scss'
import Ratting from '../atoms/Ratting/Ratting'
import Tag from '../atoms/tag/Tag'
import Host from '../atoms/Host/Host'
export default function FicheLogements() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData('/backend.json')
        if (data && Array.isArray(data)) {
          const selectedItem = data.find((d) => d.id === id)
          if (selectedItem) {
            setItem(selectedItem)
          } else {
            console.warn('Aucun élément trouvé pour cet ID')
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error)
      }
    }
    loadData()
  }, [id])

  if (!item) return <div>Chargement ou élément non trouvé...</div>

  return (
    <>
      <Carrousel pictures={item.pictures} />
      <div className='DropbarConteneur'>
        <div className='block1'>
          <h1 className='title'>{item.title}</h1>
          <h2 className='location'>{item.location}</h2>
          <Tag tags={item.tags} />
        </div>
        <div className='block2'>
          <Host
            name={item.host.name}
            picture={item.host.picture}
            className='host'
          />
          <Ratting
            rating={item.rating}
            className='ratting'
          />
        </div>
      </div>
      <div className='block3'>
        <Dropbar
          title={'equipements'}
          equipements={item.equipments}
        />
        <Dropbar
          title={'description'}
          description={item.description}
        />
      </div>
    </>
  )
}
