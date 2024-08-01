import React, { useState, useRef } from 'react'

import activeHamburger from 'web/public/images/activeHamburger.svg'
import hamburger from 'web/public/images/hamburger.svg'

import useClickOutside from 'src/hooks/useClickOutside'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const menuRef = useRef()

  useClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        aria-label="Menu button"
        className={`flex h-12 w-12 items-center justify-center rounded-[6px] shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-opacity-50 ${
          isOpen ? 'border-2 border-darkBlue bg-white' : 'bg-darkBlue'
        }`}
      >
        {isOpen ? (
          <img
            src={activeHamburger}
            alt="Close menu button"
            className="h-8 w-8"
          />
        ) : (
          <img src={hamburger} alt="Menu button" className="h-8 w-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-[4px] bg-white shadow-lg">
          <div className="flex flex-col space-y-2 p-4 font-gfs_didot_regular text-darkBlue">
            <a
              href="/#ContactForm"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
            >
              Contact
            </a>
            <a
              href="/#treatments"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
            >
              Treatments
            </a>
            <a
              href="/#gallery"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
            >
              Gallery
            </a>
            <a
              href="/#book-now"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerBtn
