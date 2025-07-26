import React from 'react'

const LookingforDrivers = ({vechilefoundref,setVechilefound}) => {
  return (
    <div ref={vechilefoundref} className='bottom-0 absolute bg-white w-full p-2 translate-y-full '>
    <div className='flex items-center justify-between'>
  <h5 className='text-2xl font-bold'>Looking for drivers</h5>
  <h3 className='text-2xl'  onClick={()=>setVechilefound(false)}>
  <i className="ri-arrow-down-double-line"></i>
  </h3>
  </div>
  <div className='w-full flex items-center '>
  <img className=' ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
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
 </div>
  )
}

export default LookingforDrivers