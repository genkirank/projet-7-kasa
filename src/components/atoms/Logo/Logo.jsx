import KasaLogo from '../Logo/KasaLogo.svg'
import './LogoStyles.scss'
export default function Logo() {
  return (
    <>
      <img
        src={KasaLogo}
        alt='LogoKasa'
        className={`logo `}
      />
    </>
  )
}
