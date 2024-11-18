import Logo from '../../atoms/Logo/Logo'
import Nav from '../../molecules/Nav/Nav'
import './Header.scss'
export default function Header() {
  return (
    <div className='StyleHeader'>
      <Logo />
      <Nav />
    </div>
  )
}
