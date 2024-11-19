import backgroundImg from './backgroundhimg.jpeg'
import './RectangleHome.scss'
import Aproposbg from './Aproposbg.jpeg'

export default function RectangleHome({ isHome }) {
  const style = isHome ? 'styleRh home' : 'styleRh Apropos'
  const BG = isHome ? backgroundImg : Aproposbg
  const word = isHome ? 'stylebghword active' : 'stylebghword none'
  return (
    <div className={style}>
      <img
        src={BG}
        alt='background'
        className='background-img'
      />
      <h1 className={word}>Chez vous, partout et ailleurs</h1>
    </div>
  )
}
