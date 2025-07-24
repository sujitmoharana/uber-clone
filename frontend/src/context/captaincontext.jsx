import { createContext, useState } from "react";

export const Captaincontext =createContext();

export const CaptainProvider = ({children})=>{
    const [captain,setCaptain] = useState(null)
  return (
  <Captaincontext.Provider value={{captain,setCaptain}}> {/* i write here because of if pass multiple vale in comtext api so use this ...if any doubt plzz see your react context api code in 66 no git commit */}
   {children}
  </Captaincontext.Provider>)
}