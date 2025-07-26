import React, { useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import Locationsearchpanel from '../components/Locationsearchpanel';
import Vechilepanel from '../components/Vechilepanel';
import Confromrides from '../components/Confromrides';
import LookingforDrivers from '../components/LookingforDrivers';
import Watingfordriver from '../components/Watingfordriver';
gsap.registerPlugin(useGSAP); // ✅ Register GSAP React plugin

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelopen, setOpenpanel] = useState(false);
  const panelref = useRef(null);
  const panelcloseref = useRef(null)
  const [vehiclepanel, setVehiclepanel] = useState(false)
  const [confronridespanel,setConfronridespanel] = useState(false)
  const vechiclepanelref = useRef(null)
  const vechiclepanelcloseref = useRef(null)
  const confromridepanelref = useRef(null)
  const [vechilefound,setVechilefound] = useState(false);
  const  vechilefoundref= useRef(null)
  const waitingfordriverref = useRef(null)
  const [waitingfordriver, setWaitingfordriver] = useState(false)
  useGSAP(function() {
  if (panelopen) {
    gsap.to(panelref.current,{
      height:"70%"
    })
    gsap.to(panelcloseref.current,{
      opacity:1
    })
  }else{
    gsap.to(panelref.current,{
      height:'0%'
    })
    gsap.to(panelcloseref.current,{
      opacity:0
    })
  }
  },[panelopen])

  useGSAP(function(){
    if (vehiclepanel) {
      gsap.to(vechiclepanelref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vechiclepanelref.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclepanel])

  useGSAP(function(){
    if (confronridespanel) {
      gsap.to(confromridepanelref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confromridepanelref.current,{
        transform:"translateY(100%)"
      })
    }
  },[confronridespanel])
  useGSAP(function(){
    if (vechilefound) {
      gsap.to(vechilefoundref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vechilefoundref.current,{
        transform:"translateY(100%)"
      })
    }
  },[vechilefound])

  

  const submithandler = (e)=>{
  e.preventDefault()
  } 
  return (
    <div className='w-screen h-screen relative overflow-hidden'>

      <img className='w-16 absolute top-3 left-3' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
      
      <div onClick={()=>setVehiclepanel(false)} className='h-screen w-screen'>
        <img className='h-screen w-screen object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' flex flex-col justify-end absolute h-screen top-0  w-full'>
       <div className='h-[30%] relative bg-white p-5'>
       <h4 ref={panelcloseref} onClick={()=>{
        setOpenpanel(false)
       }} className='absolute right-7 top-7'>
        <i className="ri-arrow-down-double-line"></i>
        </h4>
       <h4 className='text-3xl font-medium mb-2'>Find a trip</h4>
        <form onSubmit={(e)=>{submithandler(e)}}>
          <div className='w-1 h-16 absolute top-[40%] left-10 rounded-3xl bg-black'></div>
          <input  onClick={()=>setOpenpanel(true)} type="text" value={pickup} onChange={(e)=>setPickup(e.target.value)}  className='bg-[#eeeeee] py-2 px-10 text-center border-black block w-full rounded-lg mb-4'  placeholder='Add a pick-up location'/>
          <input onClick={()=>setOpenpanel(true)} type="text" value={destination} onChange={(e)=>setDestination(e.target.value)}  className='bg-[#eeeeee] py-2 px-10 text-center border-black block w-full rounded-lg mb-4'  placeholder='Enter your destination'/>
        </form>
       </div>
       <div ref={panelref} className='h-0 bg-white '>
       <Locationsearchpanel vehiclepanel={vehiclepanel} setVehiclepanel = {setVehiclepanel} setOpenpanel={setOpenpanel} />
       </div>
      </div>
     <Vechilepanel setConfronridespanel={setConfronridespanel}  vechiclepanelref={vechiclepanelref}  setVehiclepanel={setVehiclepanel}/>
     <Confromrides setVechilefound={setVechilefound} confromridepanelref={confromridepanelref} setConfronridespanel={setConfronridespanel} setVehiclepanel={setVehiclepanel}/>
     <LookingforDrivers setVechilefound={setVechilefound} vechilefoundref={vechilefoundref} />
     <Watingfordriver waitingfordriverref={waitingfordriverref} setWaitingfordriver={setWaitingfordriver}/>
    </div>
  );
};

export default Home;
