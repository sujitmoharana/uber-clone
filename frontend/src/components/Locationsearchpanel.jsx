import React from 'react'

const Locationsearchpanel = ({vehiclepanel,setVehiclepanel,setOpenpanel}) => {

  const location = [
    "24B,Near Kapoor's cofee dhamara narasinghpur",
     "25B,Near Kapoor's cofee dhamara narasinghpur",
     "26B,Near Kapoor's cofee dhamara narasinghpur",
     "27B,Near Kapoor's cofee dhamara narasinghpur"
  ]

  return (
    <div className='pl-5'>
   {
      location.map((element)=>{
        return(
          <div onClick={()=>{
            setVehiclepanel(true)
            setOpenpanel(false)
          } }className='flex gap-4 mb-3  items-center justify-start'>
            <h4 className='p-2 bg-[#eee] rounded-full'>
            <i className="ri-map-pin-fill"></i>
            </h4>
            <h4 className='font-medium'>{element}</h4>
            </div>
        )
      })
   }    
    </div>
  )
}

export default Locationsearchpanel