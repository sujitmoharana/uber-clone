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
import Captainhome from './pages/Captainhome'
import Captainprotectedrapper from './pages/Captainprotectedrapper'
import Captainlogout from './pages/Captainlogout'

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

    },{
      path:"/captain-home",
      element:(
        <Captainprotectedrapper>
          <Captainhome/>
        </Captainprotectedrapper>
      )
    },
    {
      path:"/captain/logout",
      element:<Captainprotectedrapper>
        <Captainlogout/>
      </Captainprotectedrapper>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App