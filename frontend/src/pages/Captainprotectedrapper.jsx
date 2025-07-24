import React, { useEffect,useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Captaincontext } from '../context/captaincontext';
import axios from 'axios';
 
const Captainprotectedrapper = ({children}) => {
    const token = localStorage.getItem('token');
    console.log(token);
    const {captain,setCaptain} = useContext(Captaincontext);
  const [loading,setloading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        navigate('/captain-login');
      }
    }, [token, navigate]); // include 'navigate' as dependency to avoid React warning
    
    // define async function inside useEffect
    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
       console.log(response);
       
        if (response.status === 200) {
          setCaptain(response.data.data.captain);
          setloading(false);
        }
      } catch (err) {
        console.log(err);
        navigate('/captain-login');
      }
    };
  
    // call the async function
    fetchCaptainProfile();
    if (loading) {
      return <div>loading...</div>
    }
  return (
    <>
     {children}
    </>

  )
}

export default Captainprotectedrapper