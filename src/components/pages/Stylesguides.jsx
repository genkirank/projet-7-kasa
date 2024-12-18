import { useState, useEffect } from 'react'
import Carrousel from '../atoms/Carrousel/Carrousel'
import CustomNavLink from '../atoms/Link/CustomNavLink'
import Logo from '../atoms/Logo/Logo'
import Square from '../atoms/Square/Square'
import MultySquare from '../molecules/MultySquare/MultySquare'
import Nav from '../molecules/Nav/Nav'
import Footer from '../organisms/Header/Footer/Footer'
import PageLayout from '../templates/PageLayout'
import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import Dropbar from '../atoms/Dropbar/Dropbar'
import Ratting from '../atoms/Ratting/Ratting'

export default function StyleGuide() {
  const [pictures, setPictures] = useState(null) // Stocke les images chargées
  const [isLoading, setIsLoading] = useState(true) // Indique si les données sont en cours de chargement

  useEffect(() => {
    async function loadPictures() {
      try {
        const response = await fetch('/backend.json')
        const data = await response.json()
        if (Array.isArray(data)) {
          setPictures(data) // Stocker les données
        }
      } catch (error) {
        console.error('Erreur lors du chargement des images :', error)
      } finally {
        setIsLoading(false) // Terminer le chargement
      }
    }
    loadPictures()
  }, [])

  if (isLoading) {
    return <p>Chargement des données...</p> // Afficher un message de chargement
  }

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible.</p> // Gérer le cas où aucune image n'est disponible
  }

  return (
    <>
      <CustomNavLink />
      <Logo />
      <Footer />
      <Nav />
      <PageLayout />
      <RectangleHome isHome={true} />
      <RectangleHome />
      <Square />
      <MultySquare />
      <Carrousel pictures={pictures} />
      <Dropbar />
      <Dropbar />
      <Ratting />
    </>
  )
}
