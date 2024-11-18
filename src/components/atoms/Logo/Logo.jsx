import './LogoStyles.scss'
import { ReactComponent as Icon } from './KasaLogo/Icon.svg'

export default function Logo({ isHeader }) {
  const style = isHeader ? 'logo-container header' : 'logo-container footer'

  return (
    <div className={style}>
      <Icon />
    </div>
  )
}
