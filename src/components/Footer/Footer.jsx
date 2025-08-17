import React, { useState, useContext } from 'react'
import UserContext from '../../context/data/myContext'
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Newsletter from '../Newsletter/Newsletter';


function Footer() {

  const { mode } = useContext(UserContext)



  return (
     <footer
      className="text-gray-200"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#0a3d62" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-5 gap-8">

        <div>
  <h2 className="font-semibold text-white mb-3">FOLLOW US</h2>
  <ul className="space-y-2">
    <li>
      <a
        // href="https://www.facebook.com/adarsh.fb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2  text-gray-300 hover:text-white transition duration-300 cursor-pointer"
      >
        <Facebook className="w-4 h-4" /> Facebook
      </a>
    </li>
    <li>
      <a
        href="https://x.com/AdarshSingh2123?t=v3MC1qVvJYgLPYSd33Eexw&s=08"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2  text-gray-300 hover:text-white transition duration-300"
      >
        <Twitter className="w-4 h-4" /> Twitter
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/mr_adarshsingh02/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2  text-gray-300 hover:text-white transition duration-300 cursor-pointer"
      >
        <Instagram className="w-4 h-4" /> Instagram
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/adarsh-singh-37596a238"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2  text-gray-300 hover:text-white transition duration-300 cursor-pointer"
      >
        <Linkedin className="w-4 h-4" /> LinkedIn
      </a>
    </li>
  </ul>
</div>


        <div>
          <h2 className="font-semibold text-white mb-3">NEWSLETTER</h2>
          <Newsletter />
        </div>


        <div>
          <h2 className="font-semibold text-white mb-3">BUVERSE</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Blogs</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Milestones</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Updates</li>
          </ul>
        </div>


        <div>
          <h2 className="font-semibold text-white mb-3">ABOUT US</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Careers</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Research</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Press</li>
          </ul>
        </div>


        <div>
          <h2 className="font-semibold text-white mb-3">CONTACT</h2>
          <ul className="space-y-2">
            <li>📞 +91-8467XXXXXX</li>
            <li>📞 +91-7564XXXXXX</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">FAQ</li>
            <li className="hover:text-white cursor-pointer text-gray-300 transition duration-300">Contact</li>
          </ul>
        </div>
      </div>


      <div className="text-center text-gray-400 text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} BuVerse. All rights reserved. <br />
        Let's Travel our University
        
      </div>
    </footer>
  )
}

export default Footer