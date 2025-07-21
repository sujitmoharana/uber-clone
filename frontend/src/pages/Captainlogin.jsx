import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Captainlogin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [captaindata, setCaptaindata] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(email,password);
        setCaptaindata({email:email,password:password})
        console.log(captaindata);
        setEmail('');
        setPassword('');
        
    }
  return (
    <div className='p-9 flex flex-col justify-between h-screen'>
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" className='w-16' alt="" />
        <form onSubmit={submitHandler} >
        <h3 className='text-lg font-medium mt-4 mb-2'>What's your email?</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-full' required placeholder='email@example.com' />
        <h3 className='text-lg font-medium mt-4 mb-2'>Enter Password</h3>
        <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5   border-black block w-full' required placeholder='password' />
        <button className='w-full h-10 rounded mt-7 bg-black text-white'>login</button>
        </form>
        <p className='text-center mt-2.5'>Join a fleet?<NavLink to="/captain-signup" className="text-blue-500">Register as a Captain</NavLink></p>
        </div>
        <div>
          <NavLink to="/login" className='w-full block h-10 rounded mt-7 bg-blue-950 text-white flex justify-center items-center'>Sign in as User</NavLink>
        </div>
    </div>
  )
}

export default Captainlogin