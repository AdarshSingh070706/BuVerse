import React, { useContext } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/data/myContext'
import { IconButton } from "@material-tailwind/react";
import { useSelector } from 'react-redux'
import Container from '../Container/Container';
import LogoutBtn from './LogoutBtn';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const { mode, toggleMode } = useContext(UserContext)
 const navigate = useNavigate()

    const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "About",
      slug: "/about",
      active: authStatus,
    },
    {
      name: "Departments",
      slug: "/departments",
      active: authStatus,
    },
    {
      name: "Courses",
      slug: "/courses",
      active: authStatus,
    },
    {
      name: "Contacts",
      slug: "/contact",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
     {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ]
  return (
//  <header className='shadow sticky z-50 top-0'>
//       <nav className=' bg-transparent shadow-md  w-full lg:px-6 py-2.5'>
//         <div className='flex flex-wrap mx-auto max-w-screen-xl justify-between items-center '>
//           {/* left side div */}
//           <Link
//             to="/"
//             className={`text-3xl font-extrabold tracking-wide ${mode === "dark" ? "bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500" : "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500"} bg-clip-text text-transparent 
//           hover:scale-105 transition-transform duration-300`}
//           >
//             Bu<span className={`${mode === "light" ? "text-black" : "text-white"} drop-shadow-md`}>Verse</span>
//           </Link>

//           {/* Centre div */}
//           <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
//             <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 ${isActive
//                     ? mode === "light"
//                       ? "text-orange-400" : "text-white"
//                     : mode === "dark"
//                       ? "text-gray-300" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Home
//               </NavLink>

//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 ${isActive
//                     ? mode === "light"
//                       ? "text-orange-400" : "text-white"
//                     : mode === "dark"
//                       ? "text-gray-300" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 About
//               </NavLink>

//               <NavLink
//                 to="/departments"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 ${isActive
//                     ? mode === "light"
//                       ? "text-orange-400" : "text-white"
//                     : mode === "dark"
//                       ? "text-gray-300" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Departments
//               </NavLink>

//               <NavLink
//                 to="/courses"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 ${isActive
//                     ? mode === "light"
//                       ? "text-orange-400" : "text-white"
//                     : mode === "dark"
//                       ? "text-gray-300" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Courses
//               </NavLink>

//               <NavLink
//                 to="contact"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 ${isActive
//                     ? mode === "light"
//                       ? "text-orange-400" : "text-white"
//                     : mode === "dark"
//                       ? "text-gray-300" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Contacts
//               </NavLink>
//             </ul>
//           </div>

//           {/* Right side div */}
//           <div className='flex items-center lg:order-2'>
//             <Link
//               to="#"
//               className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               <input type="text" placeholder='Search' className='border-1 rounded-sm' />
//             </Link>
//             <Link
//               to="#"
//               className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Get started
//             </Link>
//             {/* Dark And Light Button */}
//             <div>
//               {mode === 'light' ?
//                 <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//                   </svg>
//                 </IconButton>
//                 :
//                 <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//                   </svg>
//                 </IconButton>
//               }
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header> 

<header className="shadow sticky z-50 top-0">
      <Container>
        <nav className="bg-transparent  w-full lg:px-6 py-2.5">
          <div className="flex flex-wrap mx-auto max-w-screen-xl justify-between items-center">
            
            {/* Left side Logo */}
            <Link
              to="/"
              className={`text-3xl font-extrabold tracking-wide ${mode === "dark"
                ? "bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500"
                : "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500"} 
                bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
            >
              Bu<span className={`${mode === "light" ? "text-black" : "text-white"} drop-shadow-md`}>Verse</span>
            </Link>

            {/* Center Nav */}
            <div className="hidden lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="block py-2 px-4 duration-200 hover:bg-blue-100 rounded-full text-black"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>

           {/* Dark And Light Button */}
             <div className='lg:order-2'>
               {mode === 'light' ?
                 <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                   </svg>
                 </IconButton>
                 :
                 <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                   </svg>
                 </IconButton>
               }
             
            </div>
          </div>
        </nav>
      </Container>
    </header>
  
  )
}

export default Header