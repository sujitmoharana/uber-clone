import React, { useState,useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Captaincontext } from '../context/captaincontext';

const Captainsignup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstname, serFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [color,setColor] = useState("");
    const [plate,setPlate] = useState("")
    const [capacity,setCapacity] = useState("");
    const[vechileType,setVechileType] = useState("");
   const navigate = useNavigate();
   const {captain,setCaptain} = useContext(Captaincontext);

    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(email,password,firstname,lastname);
        const newcaptain = {email:email,password:password,fullname:{firstname:firstname,lastname:lastname},vechile:{color:color,plate:plate,capacity:capacity,vechileType:vechileType}}
        console.log(newcaptain);
        
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,newcaptain);
       console.log(response);

       if (response.status ===200) {
        const data = response.data.data
        console.log(data);
        setCaptain(data.captain)
        localStorage.setItem('token',data.token);
        navigate("/captain-home")
    }
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
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black  block w-full' required placeholder='email@example.com' />
    <h3 className='text-lg font-medium mt-4 mb-2'>Enter Password</h3>
    <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5   border-black block w-full' required placeholder='password' />
    <h3 className='text-lg font-medium mt-4 mb-2'>Enter Veicle details's</h3>
    <div className='flex gap-2'>
    <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-1/2 ' placeholder='color of veichle'/>
    <input type="text"  value={plate} onChange={(e)=>setPlate(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-1/2 ' placeholder='plate no of veichle'/>
    </div>
    <div className='flex gap-2 mt-4 mb-2'>
    <input type="number" value={capacity} onChange={(e)=>setCapacity(e.target.value)} className='bg-[#eeeeee] py-2 px-3.5  border-black block w-1/2 ' placeholder='capacity of veichle'/>
    <select value={vechileType} onChange={(e)=>setVechileType(e.target.value)}  className="bg-[#eeeeee] text-black px-2 py-2 rounded-md outline-none ">
        <option value="" disabled>-- Choose --</option>
        <option value="car">car</option>
        <option value="motorcycle">motorcycle</option>
        <option value="auto">auto</option>
      </select>
      </div>
    <button className='w-full h-10 rounded mt-7 bg-black text-white'>Create an Account</button>
    </form>
    <p className='text-center mt-2.5'>Already have a account?<NavLink to="/captain-login" className="text-blue-500"> Log in here</NavLink></p>
    </div>
    <div>
    <p className='text-[11px]'>By proceeding, you consent to get calls, WhatsApp or SMS
messages, including by automated means, from Uber and its
affiliates to the number provided.</p>
    </div>
</div>  )
}

export default Captainsignup