import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-sans">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">SHOP</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">PLAN MY KITCHEN</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">ABOUT US</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">GALLERY</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-sans">Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">CONTACT</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">HOW TO BUY</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">DOWNLOADS</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-sans">Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">DELIVERY</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">TERMS</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm sm:text-base font-sans">PRIVACY</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-sans">Follow</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-gray-300 text-black bg-white p-2 rounded-full text-sm sm:text-base font-sans">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300 text-black bg-white p-2 rounded-full text-sm sm:text-base font-sans">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300 text-black bg-white p-2 rounded-full text-sm sm:text-base font-sans">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 font-sans">
          <p>Copyright Online MTC Home Kitchens 2018. All rights reserved.</p>
          <p>Responsive website design, Development & Hosting by mtc.</p>
        </div>
      </footer>
  )
}

export default footer