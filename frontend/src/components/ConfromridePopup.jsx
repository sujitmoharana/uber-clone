import React from 'react'
import { NavLink } from 'react-router-dom'

const ConfromridePopup = ({setRidepopupPanel,setConfromridePanel,confromridepanelref}) => {
    const [otp,setOtp] = useState('');
  return (
    <div ref={confromridepanelref}  className='h-screen bottom-0 absolute translate-y-full bg-white w-full  p-2  '>
      <div className='flex items-center justify-between'>
    <h5 className='text-2xl font-bold'>New Ride is </h5>
    <h3 className='text-2xl'  onClick={()=>setConfromridePanel(false)}>
    <i className="ri-arrow-down-double-line"></i>
    </h3>
    </div>
    <div className=' p-3 mt-5 mb-3 flex items-center justify-between'>
    <div className='flex items-center justify-center gap-3'>
    <img className='w-12 rounded-full' src="https://asiasociety.org/sites/default/files/styles/1200w/public/2021-09/Sundar%20Pichai%20Headshot.jpg" alt="" />
    <p className='font-medium'>Sujit moharana</p>
    </div>
    <div>
        <p className='text-2xl font-medium'>2.2km</p>
    </div>
    </div>
    <div className='flex p-3 items-center mb-4 border-b-3 border-gray-200 gap-3'>     
    <i className="ri-map-pin-user-fill"></i>
    <div>
        <h3 className='text-2xl font-medium'>562/11-A</h3>
        <h3>dhamara jagula, bhadrak</h3>
    </div>
    </div>
    <div className=' border-gray-200 flex p-3 items-center mb-4 gap-3 border-b-3'>
    <i className="ri-map-pin-user-fill"></i>
    <div>
        <h3 className='text-2xl font-medium'>562/11-A</h3>
        <h3>dhamara jagula, bhadrak</h3>
    </div>
    </div>
    <div className='flex p-3  items-center gap-3 mb-4'>
    <i className="ri-map-pin-user-fill"></i>
    <div>
        <h3 className='text-2xl font-medium'>562/11-A</h3>
        <h3>dhamara jagula, bhadrak</h3>
    </div>
    </div>
   <form onSubmit={(e)=>{
    submitHandler(e);
   }}>
    <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" placeholder='enter OTP' className='bg-[#eeeeee] py-2 px-10 text-center border-black block w-full rounded-lg mb-4'/>
<NavLink to="/captain-riding" onClick={()=>{    
}} className='w-full block mb-2 bg-green-600 p-2 rounded-lg text-white text-center'>Conform</NavLink>
<button onClick={()=>{
    setConfromridePanel(false)
    setRidepopupPanel(false)
}} className='w-full mb-2 bg-red-800 p-2 rounded-lg text-white'>Cencel</button>
   </form>
   </div>
  )
}

export default ConfromridePopup