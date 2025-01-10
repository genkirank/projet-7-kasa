import './Host.scss'
export default function Host({ name, picture }) {
  return (
    <div className='host-container'>
      <h2 className='host-name'>{name}</h2>
      <img
        src={picture}
        alt={name}
        className='host-picture'
      />
    </div>
  )
}
