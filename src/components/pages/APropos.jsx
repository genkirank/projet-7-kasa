import Dropbar from '../atoms/Dropbar/Dropbar'
import '../../assets/Apropos.scss'
import { apropoData } from '../Database/Database.js'
import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
import StyleGuide from './StylesGuides.jsx'
export default function APropos() {
  console.log(apropoData)
  return (
    <>
      <RectangleHome />
      <div className='alignement'>
        {apropoData.apropos.map((item) => (
          <Dropbar
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <StyleGuide />
    </>
  )
}
