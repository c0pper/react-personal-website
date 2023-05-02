import React from 'react'
import { navLinks } from "../constants"
import { useState, useEffect } from 'react'
import Button from './Button'

function TopBar() {
  const [toggle, setToggle] = useState(false)
  const [shouldBeVisible, setshouldBeVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (toggle) {
        setToggle(false)
      }
      
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setshouldBeVisible(false);
        console.log(shouldBeVisible, window.pageYOffset)
      } else { // if scroll up show the navbar
        setshouldBeVisible(true);
        console.log(shouldBeVisible, window.pageYOffset)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toggle, shouldBeVisible, lastScrollY])
  
  return (
    <nav className={`fixed ${shouldBeVisible ? "opacity-100" : "opacity-0"} transition duration-700 w-full xl:bg-primary bg-transparent text-black z-20`}>
      <div className="flex xl:justify-center justify-end items-center xl:grid grid-cols-5 mx-4">
        {/* DESKTOP MENU */}
        <ul className="xl:flex hidden col-start-2 col-span-3 justify-between">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`font-normal ${index !== navLinks.length -1 ? "mr-4" : "mr-0"} hover:underline`}
            >
              <Button>
                <a className="px-4 py-1" href={`#${link.id}`}>{link.title}</a>
              </Button>
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
                <ul className="w-full border-t-[1px] border-secondary">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.id}
                      className={`font-normal ${index === 0 ? "mt-4" : undefined}`}
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