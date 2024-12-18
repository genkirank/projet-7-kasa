import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import APropos from './APropos'
import FicheLogements from './FicheLogements'
import PageError from './PageError'
import Home from './Home'
import PageLayout from '../templates/PageLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <PageError />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/fichelogement/:id', element: <FicheLogements /> }, // Utilisation de ':id'
      { path: '/a-propos', element: <APropos /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
