import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Captainlogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);
    
    const onsubmithandler = async()=>{    
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers: {
            Authorization: `Bearer ${token}`  // ✅ Capital B
          }
    })
    console.log(response);
    if (response.status ===200) {
        localStorage.removeItem('token');
        navigate('/login')
    }
}
onsubmithandler();
  return (
    <div></div>
  )
}

export default Captainlogout