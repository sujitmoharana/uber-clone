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
  <Biocontext.Provider value={{user,setUser}}> {/* i write here because of if pass multiple vale in comtext api so use this ...if any doubt plzz see your react context api code in 66 no git commit */}
   {children}
  </Biocontext.Provider>)
}