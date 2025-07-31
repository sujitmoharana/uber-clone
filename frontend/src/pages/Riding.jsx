import React from 'react'

const Riding = () => {
  return (
   <div className='h-screen'>
     <div className='h-1/2' >
    <img className='h-89 w-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
     </div>
     <div className='h-1/2' >
     <div  className='  bg-white w-full p-2  '>
    <div className='w-full mt-7 flex items-center justify-between '>
    <img className='w-28'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
    <div>
    <p>sarthak</p>
    <p>MPO4 AB 1234</p>
    <p>maruti suziki alto</p>
    </div>
    </div>
    <div className='flex p-1 items-center mb-4 border-b-3 border-gray-200 gap-3'>
    <i className="ri-map-pin-user-fill"></i>
    <div>
        <h3 className='text-2xl font-medium'>562/11-A</h3>
        <h3>dhamara jagula, bhadrak</h3>
    </div>
    </div>
    <div className='flex p-1 items-center mb-4 border-b-3 border-gray-200 gap-3'>
    <i class="ri-money-rupee-circle-line"></i>
        <div>
        <h3 className='text-2xl font-medium'>192</h3>
        <h3>cash,cash</h3>
    </div>
    </div>
    <button className='w-full mb-2 bg-green-600 p-2 rounded-lg text-white'>Conform</button>
   </div>
     </div>
   </div>
  )
}

export default Riding