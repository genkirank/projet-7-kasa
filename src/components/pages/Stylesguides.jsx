import CustomNavLink from '../atoms/Link/CustomNavLink'
import Logo from '../atoms/Logo/Logo'
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
    </>
  )
}
