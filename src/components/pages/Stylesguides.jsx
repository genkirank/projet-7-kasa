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

export default function StyleGuide() {
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
      <Carrousel />
      <Dropbar Data={'hello world'} />
    </>
  )
}
