import { useParams } from 'react-router-dom'

export default function FicheLogements() {
  const { title } = useParams
  return (
    <>
      <h1>{title}aa</h1>
    </>
  )
}
