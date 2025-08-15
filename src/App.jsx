import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import UserContextProvider from './context/data/UserContextProvider'
// import MyState from './context/data/myState'

function App() {
 

  return (
    <UserContextProvider>
  
    </UserContextProvider>
  )
}

export default App
