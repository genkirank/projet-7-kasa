import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import MultySquare from '../molecules/MultySquare/MultySquare'
import backgroundImg from '../atoms/Rectanglebg/backgroundhimg.jpeg'

export default function Home() {
  return (
    <>
      <RectangleHome
        isHome={true}
        BG={backgroundImg}
        titres={'Chez vous, partout et ailleurs'}
      />
      <MultySquare />
    </>
  )
}
