import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[url(/assests/traffic.jpeg)] bg-cover bg-center bg-red-400 w-full h-screen flex flex-col justify-between pt-5 '>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" className='w-16 ml-5' alt="" />
        <div className='bg-white py-4 px-4'>
            <h2 className='text-2xl font-bold'>Get Started with uber</h2>
            <NavLink to="/login" className=' py-3 w-full block bg-black text-white mt-4 flex justify-center  ' >Continue</NavLink>
        </div>
    </div>
  )
}

export default  Home