import './Tag.scss'
export default function Tag({ tags }) {
  return (
    <div className='flex'>
      {tags.map((item) => (
        <span
          key={item}
          className='tag-item'
        >
          {item}
        </span>
      ))}
    </div>
  )
}
