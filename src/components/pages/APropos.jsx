import Dropbar from '../atoms/Dropbar/Dropbar'
import Aproposbg from '../atoms/Rectanglebg/Aproposbg.jpeg'
import '../../assets/Apropos.scss'
import { apropoData } from '../Database/Database.js'
import RectangleHome from '../atoms/Rectanglebg/RectangleHome'
export default function APropos() {
  console.log(apropoData)
  return (
    <>
      <RectangleHome BG={Aproposbg} />
      <div className='alignement'>
        {apropoData.apropos.map((item) => (
          <Dropbar
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  )
}
