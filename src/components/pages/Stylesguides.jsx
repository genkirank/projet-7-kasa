import CustomNavLink from '../atoms/Link/CustomNavLink'
import Logo from '../atoms/Logo/Logo'
import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import Square from '../atoms/Square/Square'
import MultySquare from '../molecules/MultySquare/MultySquare'
import Nav from '../molecules/Nav/Nav'
import Footer from '../organisms/Header/Footer/Footer'
import PageLayout from '../templates/PageLayout'

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
    </>
  )
}
