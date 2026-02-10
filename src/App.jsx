import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from './components/ProfilePage/Profile';
import Navigation from "./components/Navigation/Navigation";
import Details from "./components/ProfilePage/Details";

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
        path:'/details',
        element:<Details />
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
