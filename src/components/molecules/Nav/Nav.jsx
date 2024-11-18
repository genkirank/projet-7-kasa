import CustomNavLink from '../../atoms/Link/CustomNavLink'
import Logo from '../../atoms/Logo/Logo'
import './StyleNav.scss'

export default function Nav() {
  return (
    <div className='StyleNav'>
      <Logo isHeader={true} />
      <CustomNavLink
        root={'/'}
        name={'Accueil'}
      />
      <CustomNavLink
        root={'/a-propos'}
        name={'A Propos'}
      />
    </div>
  )
}
