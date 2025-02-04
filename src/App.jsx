import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from './components/ProfilePage/Profile';
import Navigation from "./components/Navigation/Navigation";

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
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App;
