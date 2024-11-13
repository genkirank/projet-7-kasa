import CustomNavLink from '../../atoms/Link/CustomNavLink'

export default function Nav() {
  return (
    <div>
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
