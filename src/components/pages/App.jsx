import PageError from './pageError'
import '../../assets/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import APropos from './APropos'

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,

    errorElement: <PageError />,
    children: [
      {
        path: '/fiche-Logement',
        element: <ficheLogement />
      },
      {
        path: '/A-Propos',
        element: <APropos />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
