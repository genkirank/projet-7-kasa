import './Square.scss'

export default function Square({ title, image }) {
  return (
    <div className='square'>
      <img
        className='square-cover'
        src={image}
        alt='cover'
      />
      <h1 className='titles'>{title}</h1>
    </div>
  )
}
