import './RectangleHome.scss'

export default function RectangleHome({ isHome, BG, titres }) {
  const style = isHome ? 'styleRh home' : 'styleRh Apropos'
  const word = isHome ? 'stylebghword active' : 'stylebghword none'
  return (
    <div className={style}>
      <img
        src={BG}
        alt='background'
        className='background-img'
      />
      <h1 className={word}>{titres}</h1>
    </div>
  )
}
