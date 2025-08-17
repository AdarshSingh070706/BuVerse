import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/data/UserContextProvider'
// import MyState from './context/data/myState'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './conf/authService'
import { logout } from './store/authSlice'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="flex-grow flex items-center justify-center">
          <Outlet />
        </main>

        <Footer />
      </div>
    </UserContextProvider>
  ) : null
}

export default App
