import { ReactComponent as StarPlein } from './Vectorplein.svg'
import { ReactComponent as StarVide } from './starvide.svg'
import './Ratting.scss'
export default function Ratting({ rating }) {
  return (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{star <= rating ? <StarPlein /> : <StarVide />}</span>
      ))}
    </div>
  )
}
