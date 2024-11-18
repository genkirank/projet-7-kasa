import CustomNavLink from '../../atoms/Link/CustomNavLink'
import './Nav.scss'
export default function Nav() {
  return (
    <div className='StyleNav'>
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
