import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import APropos from './APropos'
import FicheLogements from './FicheLogements'
import PageError from './PageError'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: '/', // La page d'accueil
    element: <Home />,
    errorElement: <PageError />
  },
  {
    path: '/fichelogement', // Page FicheLogements
    element: <FicheLogements />
  },
  {
    path: '/a-propos', // Page À Propos
    element: <APropos />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
