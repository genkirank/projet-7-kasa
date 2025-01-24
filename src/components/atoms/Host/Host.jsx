import './Host.scss'
export default function Host({ name, picture }) {
  const split = name.split(' ')
  console.log(split)
  return (
    <div className='host-container'>
      <dir className='host-container_split'>
        <h2 className='host-name'>{split[0]}</h2>
        <h2 className='host-name'>{split[1]}</h2>
      </dir>

      <img
        src={picture}
        alt={name}
        className='host-picture'
      />
    </div>
  )
}
