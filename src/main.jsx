import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header/header.jsx'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Departments from './pages/Departments/Departments'
import Courses from './pages/Courses/Courses'
import Contact from './pages/Contact/Contact'
import { AuthLayout, Login, Signup } from './components/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Thankyou from './components/Thankyou.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [

//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />}/>
//       <Route path='departments' element={<Departments />}/>
//       <Route path='courses' element={<Courses />}/>
//       <Route path='contact' element={<Contact />}/>

//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      }, {
        path: "/thankyou",
        element: (
          <AuthLayout >
            <Thankyou />
          </AuthLayout>
        )
      },

      {
        path: "/about",
        element: (
          <AuthLayout >
            <About />
          </AuthLayout>
        )
      },
      {
        path: "/departments",
        element: (
          <AuthLayout >
            <Departments />
          </AuthLayout>
        )
      },
      {
        path: "/courses",
        element: (
          <AuthLayout >
            <Courses />
          </AuthLayout>
        )
      },
      {
        path: "/contact",
        element: (
          <AuthLayout >
            <Contact />
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
