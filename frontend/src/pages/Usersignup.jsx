import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Usersignup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstname, serFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [captaindata, setCaptaindata] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(email,password,firstname,lastname);
        setCaptaindata({email:email,password:password,fullname:{firstname:firstname,lastname:lastname}})
        console.log(captaindata);
        setEmail('');
        setPassword('');
        serFirstname('');
        setLastname('')
        
    }
  return (
    <div className='p-9 flex flex-col justify-between h-screen'>
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" className='w-16' alt="" />
    <form onSubmit={submitHandler} >
    <h3 className='text-lg font-medium mt-4 mb-2'>what's your name</h3>
    <div className='flex gap-2'>
    <input type="text" value={firstname} onChange={(e)=>serFirstname(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-1/2 ' required placeholder='firstname' />
    <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-1/2' required placeholder='lastname' />
    </div>
    <h3 className='text-lg font-medium mt-4 mb-2'>What's your email?</h3>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-full' required placeholder='email@example.com' />
    <h3 className='text-lg font-medium mt-4 mb-2'>Enter Password</h3>
    <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5   border-black block w-full' required placeholder='password' />
    <button className='w-full h-10 rounded mt-7 bg-black text-white'>login</button>
    </form>
    <p className='text-center mt-2.5'>Already have a account?<NavLink to="/login" className="text-blue-500"> Log in here</NavLink></p>
    </div>
    <div>
    <p className='text-[11px]'>By proceeding, you consent to get calls, WhatsApp or SMS
messages, including by automated means, from Uber and its
affiliates to the number provided.</p>
    </div>
</div>
  )
}

export default Usersignup