import KasaLogo from '../Logo/KasaLogo/KasaLogo'
import './LogoStyles.scss'
export default function Logo({ className }) {
  return (
    <div className={`logo-container ${className}`}>
      <KasaLogo
        alt='LogoKasa'
        className={`logo ${className}`}
      />
    </div>
  )
}
