import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import MultySquare from '../molecules/MultySquare/MultySquare'

export default function Home() {
  return (
    <>
      <RectangleHome isHome={true} />
      <MultySquare />
    </>
  )
}
