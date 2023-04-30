import React from 'react'
import { navLinks } from "../constants"
import { useState } from 'react'

function TopBar() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className="flex w-full h-12 justify-end sm:justify-center items-center sticky top-0 sm:bg-white bg-black text-black">
      <div className="flex sm:grid grid-cols-5 mx-4">
        {/* DESKTOP MENU */}
        <ul className="sm:flex hidden col-start-2 col-span-3 justify-between">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`font-normal ${index !== navLinks.length -1 ? "mr-4" : "mr-0"} hover:underline`}
            >
              <a className="btn" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden">
          <div
            className="border border-white bg-white p-1 "
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle 
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          }
          </div>

          {/* OPEN */}
          <div className={`${toggle ? "flex" : "hidden"} justify-end text-right p-6 bg-white text-black absolute left-0 right-0 mx-4 my-2 min-w-[140px]`}>
            <ul>
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-normal`}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar