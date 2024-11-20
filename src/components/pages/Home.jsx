import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import MultySquare from '../molecules/MultySquare/MultySquare'
import PageLayout from '../templates/PageLayout'

export default function Home() {
  return (
    <>
      <PageLayout>
        <RectangleHome isHome={true} />
        <MultySquare />
      </PageLayout>
    </>
  )
}
