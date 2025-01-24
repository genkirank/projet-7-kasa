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
    <div className='fiche-logement'>
      <Carrousel pictures={item.pictures} />
      <div className='fiche-logement__content'>
        <div className='fiche-logement__info'>
          <h1 className='fiche-logement__title'>{item.title}</h1>
          <h2 className='fiche-logement__location'>{item.location}</h2>
          <Tag tags={item.tags} />
        </div>
        <div className='fiche-logement__host-rating'>
          <Host
            name={item.host.name}
            picture={item.host.picture}
            className='fiche-logement__host'
          />
          <Ratting
            rating={item.rating}
            className='fiche-logement__rating'
          />
        </div>
      </div>
      <div className='fiche-logement__details'>
        <Dropbar
          title={'Description'}
          description={item.description}
        />
        <Dropbar
          title={'Équipements'}
          equipements={item.equipments}
        />
      </div>
    </div>
  )
}
