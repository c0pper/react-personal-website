import React from 'react'
import { navLinks } from "../constants"
import { useState } from 'react'

function TopBar() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className="flex w-full h-12 justify-end xl:justify-center items-center xl:bg-primary bg-black text-black relative">
      <div className="flex xl:grid grid-cols-5 mx-4">
        {/* DESKTOP MENU */}
        <ul className="xl:flex hidden col-start-2 col-span-3 justify-between">
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
        <div className="xl:hidden">
          <div
            className="border border-primary bg-primary p-1 "
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle
            ? 
            // SHOW MENU
            <div>
              <div className="flex flex-col items-end justify-start text-right p-6 bg-primary text-black absolute -top-4 -right-4 mx-4 my-2 w-1/2 h-screen">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <ul>
                  {navLinks.map((link) => (
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

            // SHOW BURGER ICON
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar