import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Userlogin/>
    },
    {
      path:"/signup",
      element:<Usersignup/>
    },
    {
      path:"/captain-login",
      element:<Captainlogin/>
    },
    {
      path:"/captain-signup",
      element:<Captainsignup/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App