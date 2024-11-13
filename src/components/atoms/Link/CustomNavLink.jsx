import { NavLink } from 'react-router-dom'

export default function CustomNavLink({ name, root }) {
  return <NavLink to={root}>{name}</NavLink>
}
