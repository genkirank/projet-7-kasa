import './Tag.scss'
export default function Tag({ tags }) {
  return (
    <div className='flex'>
      {tags.map((item, index) => (
        <span
          key={index}
          className='tag-item'
        >
          {item}
        </span>
      ))}
    </div>
  )
}
