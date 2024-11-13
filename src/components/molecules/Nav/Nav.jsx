import CustomNavLink from '../../atoms/Link/CustomNavLink'

export default function Nav() {
  return (
    <div>
      <CustomNavLink
        root={'/home'}
        name={'Accueil'}
      />
      <CustomNavLink
        root={'/a-propos'}
        name={'A Propos'}
      />
    </div>
  )
}
