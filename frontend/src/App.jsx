import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start'
import Home from './pages/home'
import UserProtectedrapper from './pages/userProtectedrapper'
import Userlogout from './pages/Userlogout'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Start/>
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
    },
    {
      path:"/home",
      element:(
        <UserProtectedrapper>
          <Home/>
        </UserProtectedrapper>
      )
    },{
      path:"/user/logout",
      element:(
        <UserProtectedrapper>
          <Userlogout/>
        </UserProtectedrapper>
      )

    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App