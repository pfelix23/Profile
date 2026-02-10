import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from './components/ProfilePage/Profile';
import Navigation from "./components/Navigation/Navigation";
import FairJob from "./components/ProfilePage/FairJob";
import Equitrack from "./components/ProfilePage/EquiTrack";
import Elitebnb from "./components/ProfilePage/Elitebnb";
import Flux from "./components/ProfilePage/Flux";
import Mbolden from "./components/ProfilePage/mBOLDen";
function Layout () {

  return (
    <>
    <Navigation />
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Profile />
      },
      {
        path:'/FairJob',
        element:<FairJob />
      },
      {
        path:'/EquiTrack',
        element:<Equitrack />
      },
      {
        path:'/Elitebnb',
        element:<Elitebnb />
      },
      {
        path:'/Flux',
        element:<Flux />
      },
      {
        path:'/mBolden-Change',
        element:<Mbolden />
      },
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
