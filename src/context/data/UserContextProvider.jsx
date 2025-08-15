import React, { useState } from "react";
import UserContext from "./myContext";

const UserContextProvider = ({children}) => {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(17,24,39)'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <UserContext.Provider value={{mode, setMode, toggleMode}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
  
