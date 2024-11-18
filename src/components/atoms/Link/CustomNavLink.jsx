import { NavLink } from 'react-router-dom'
import './StyleNavlink.scss'

export default function CustomNavLink({ name, root }) {
  return (
    <div>
      <NavLink
        to={root}
        className={({ isActive }) => (isActive ? 'custom-navlink active' : 'custom-navlink')}
      >
        {name}
      </NavLink>
    </div>
  )
}
