import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Biocontext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedrapper = ({children}) => {
    const token = localStorage.getItem('token');
    console.log(token);
    const {user,setUser} = useContext(Biocontext);
    const [loading,setloading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        navigate('/login');  // ✅ Now React is ready
      }
    }, [token,navigate]);

        // define async function inside useEffect
        const fetchCaptainProfile = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
           console.log(response);
           
            if (response.status === 200) {
              setUser(response.data.data.captain);
              setloading(false);
            }
          } catch (err) {
            console.log(err);
            navigate('/login');
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

export default UserProtectedrapper