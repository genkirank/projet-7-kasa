import { useParams } from 'react-router-dom'
import Dropbar from '../atoms/Dropbar/Dropbar'
import Carrousel from '../atoms/Carrousel/Carrousel'
import { useEffect, useState } from 'react'
import { fetchData } from '../atoms/fetchData/fetchData'

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
      <h1>{item.title}</h1>
      <h2>{item.location}</h2>

      <Dropbar
        title={'equipements'}
        equipements={item.equipments}
      />

      <Dropbar
        title={'description'}
        description={item.description}
      />
    </>
  )
}
