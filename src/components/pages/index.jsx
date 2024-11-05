import PageError from './pageError';
import '../../assets/App.css'; 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Outlet /></div>,
    errorElement:<PageError/>,
    children: [
      {
        path: 'fiche-Logement',
        element: <div>fiche-Logement</div>
      }, {
        path: 'A-Propos',
        element: <div>A-Propos</div>
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={router}/>
   
  );
}

export default App;
