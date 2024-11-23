import Header from '../organisms/Header/Header'
import Footer from '../organisms/Header/Footer/Footer'
import './PageLayout.scss'
import { Outlet } from 'react-router-dom'
function PageLayout() {
  return (
    <div className='StyleLayout'>
      <Header />
      <main className='page-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default PageLayout
