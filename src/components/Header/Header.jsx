import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "departments", label: "Departments" },
    { id: "courses", label: "Courses" },
    { id: "contact", label: "Contact" }

  ]
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className=' bg-transparent shadow-md  w-full lg:px-6 py-2.5'>
        <div className='flex flex-wrap mx-auto max-w-screen-xl justify-between items-center '>
          {/* left side div */}
          <Link
            to="/"
            className='text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent 
          hover:scale-105 transition-transform duration-300'
          >
            Bu<span className="text-white drop-shadow-md">Verse</span>
          </Link>

          {/* Centre div */}
          <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <NavLink
              to="/"
              className={({isActive}) => {
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }}
              >
                Home
              </NavLink>

               <NavLink
              to="/about"
              className={({isActive}) => {
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }}
              >
                About
              </NavLink>

               <NavLink
              to="/departments"
              className={({isActive}) => {
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }}
              >
                Departments
              </NavLink>

               <NavLink
              to="/courses"
              className={({isActive}) => {
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }}
              >
                Courses
              </NavLink>

               <NavLink
              to="contact"
              className={({isActive}) => {
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }}
              >
                Contacts
              </NavLink>
            </ul>
          </div>

          {/* Right side div */}
          <div className='flex items-center lg:order-2'>
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header