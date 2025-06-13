import React, { useState } from 'react'
import {FaFacebookF, FaInstagram, FaShoppingCart, FaTwitter } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent text-white">
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-between items-center">
            <div className="text-3xl font-bold">MK</div>
            <button className="text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-around">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="text-3xl font-bold">MK</div>
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-gray-300 font-sans">ABOUT US</a>
              <a href="#" className="hover:text-gray-300 font-sans">GALLERY</a>
              <button className="border border-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300 font-sans rounded-full flex items-center">
                MY ORDER <FaShoppingCart className="ml-2" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 bg-black bg-opacity-90 rounded-lg p-4`}>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-300 text-white">
                  <FaInstagram />
                </a>
              </div>
              <a href="#" className="hover:text-gray-300 font-sans text-center">ABOUT US</a>
              <a href="#" className="hover:text-gray-300 font-sans text-center">GALLERY</a>
              <button className="border border-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300 font-sans rounded-full flex items-center justify-center">
                MY ORDER <FaShoppingCart className="ml-2" />
              </button>
            </div>
          </div>
        </nav>
  )
}

export default Navbar