import React, { useRef, useState } from 'react'
import Finshride from '../components/Finshride'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
    const [finishridePanel, setFinishridePanel] = useState(false);
    const finishridePanelref = useRef(null)

    useGSAP(function(){
        if (finishridePanel) {
          gsap.to(finishridePanelref.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishridePanelref.current,{
            transform:"translateY(100%)"
          })
        }
      },[finishridePanel])
  return (
    <div className='w-screen h-screen'>
    <div className='h-4/5 '>
    <img className='h-full w-full object-cover'  src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
  </div>
  <div className='h-1/5 bg-yellow-500 '>
  <div onClick={()=>setFinishridePanel(true)} className='flex items-center justify-center'>
  <i className="ri-arrow-up-wide-line text-2xl text-amber-800"></i>
  </div>
  <div className=' p-3 flex justify-between items-center'>
   <h4 className='font-medium text-2xl'>4 km away</h4>
   <button className='bg-green-600 block p-3 rounded-lg'>Complete Ride</button>
  
   </div>
  </div>
  <Finshride setFinishridePanel={setFinishridePanel}  finishridePanelref={finishridePanelref}  />
  </div>
  )
}

export default CaptainRiding