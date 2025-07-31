import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Captaindetails from './Captaindetails'
import Ridepouup from '../components/Ridepouup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfromridePopup from '../components/ConfromridePopup'

const Captainhome = () => {
const [ridepopupPanel, setRidepopupPanel] = useState(true);
const ridepopupPanelref = useRef(null)

const [confromridePanel, setConfromridePanel] = useState(false);
const confromridepanelref = useRef(null)

useGSAP(function(){
  if (ridepopupPanel) {
    gsap.to(ridepopupPanelref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ridepopupPanelref.current,{
      transform:"translateY(100%)"
    })
  }
},[ridepopupPanel])
useGSAP(function(){
  if (confromridePanel) {
    gsap.to(confromridepanelref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confromridepanelref.current,{
      transform:"translateY(100%)"
    })
  }
},[confromridePanel])

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <NavLink to="/" className="absolute bg-white w-9 h-9 flex items-center justify-center rounded-full top-2 left-2">
      <i class="ri-home-line"></i>
      </NavLink>
    <div className='h-3/5' >
   <img className='h-89 w-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>
    <div className='h-2/5 '>
  <Captaindetails/>
  <Ridepouup ridepopupPanelref={ridepopupPanelref} setConfromridePanel={setConfromridePanel} setRidepopupPanel= {setRidepopupPanel} />
  <ConfromridePopup setRidepopupPanel={setRidepopupPanel} confromridepanelref={confromridepanelref} setConfromridePanel={setConfromridePanel}/>
    </div>
  </div>
  )
}

export default Captainhome