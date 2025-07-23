import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Biocontext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProtectedrapper = ({children}) => {
    const token = localStorage.getItem('token');
    console.log(token);
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        navigate('/login');  // ✅ Now React is ready
      }
    }, [token]);
    
  return (
    <>
     {children}
    </>

  )
}

export default UserProtectedrapper