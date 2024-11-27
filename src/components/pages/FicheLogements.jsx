import { useParams } from 'react-router-dom'
import Dropbar from '../atoms/Dropbar/Dropbar'

export default function FicheLogements() {
  const { title } = useParams
  return (
    <>
      <h1>{title}</h1>
      <Dropbar />
    </>
  )
}
