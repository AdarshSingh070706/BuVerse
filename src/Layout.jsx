import React from 'react'
import Header from './components/Header/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/footer'
import UserContextProvider from './context/data/UserContextProvider'



function Layout() {
  return (
    <UserContextProvider>
    <Header />
    <Outlet />
    
    <Footer />
    </UserContextProvider>
  )
}

export default Layout