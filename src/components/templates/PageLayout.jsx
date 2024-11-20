import Header from '../organisms/Header/Header'
import Footer from '../organisms/Header/Footer/Footer'
import './PageLayout.scss'
function PageLayout({ children }) {
  return (
    <div className='StyleLayout'>
      <Header />
      <main className='page-content'>{children}</main>
      <Footer />
    </div>
  )
}
export default PageLayout
