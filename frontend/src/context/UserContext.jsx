import { createContext, useState } from "react";

export const Biocontext =createContext();

export const Bioprovider = ({children})=>{
    const [user,setUser] = useState({
        email:"",
        fullname:{
            firstname:"",
            lastname:""
        }
    })
  return (
  <Biocontext.Provider value={[user,setUser]}>
   {children}
  </Biocontext.Provider>)
}