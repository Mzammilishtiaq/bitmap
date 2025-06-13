import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Testimonial() {
  return (
    <section className="bg-gray-100">
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        showStatus={false} 
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, label) => (
          <button
            onClick={onClickHandler}
            className="absolute left-4 sm:left-8 md:left-5 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300"
            aria-label={String(label)}
          >
            <FaChevronLeft className="text-[#D4B254] text-3xl sm:text-4xl md:text53xl" />
          </button>
        )}
        renderArrowNext={(onClickHandler, label) => (
          <button
            onClick={onClickHandler}
            className="absolute right-4 sm:right-8 md:right-5 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300"
            aria-label={String(label)}
          >
            <FaChevronRight className="text-[#D4B254] text-3xl sm:text-4xl md:text53xl" style={{ fontWeight: 'thin' }} />
          </button>
        )}
      >
      <div className='py-8 sm:py-12 md:py-16 px-4 text-center'>
       <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 font-sans">WHAT OUR CUSTOMERS SAY</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Over 35 years experience designing handmade kitchens</h2>
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-12">
          <div className="max-w-3xl px-4 sm:px-6 md:px-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              Since my first contact I have received a very high level of customer service
              and advice with my kitchen plans. Ben responded very quickly to all of my
              emails and delivery of the kitchen was as planned.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-800 font-semibold font-sans">Jane, Dundee</p>
          </div>
        </div>
        <button className="mt-6 sm:mt-8 md:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#D4B254] transition-colors duration-300 font-sans">FREQUENTLY ASKED QUESTIONS</button>
       </div>
       <div className='py-8 sm:py-12 md:py-16 px-4 text-center'>
       <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 font-sans">WHAT OUR CUSTOMERS SAY</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Over 35 years experience designing handmade kitchens</h2>
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-12">
          <div className="max-w-3xl px-4 sm:px-6 md:px-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              Since my first contact I have received a very high level of customer service
              and advice with my kitchen plans. Ben responded very quickly to all of my
              emails and delivery of the kitchen was as planned.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-800 font-semibold font-sans">Jane, Dundee</p>
          </div>
        </div>
        <button className="mt-6 sm:mt-8 md:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#D4B254] transition-colors duration-300 font-sans">FREQUENTLY ASKED QUESTIONS</button>
       </div>
       <div className='py-8 sm:py-12 md:py-16 px-4 text-center'>
       <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 font-sans">WHAT OUR CUSTOMERS SAY</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Over 35 years experience designing handmade kitchens</h2>
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-12">
          <div className="max-w-3xl px-4 sm:px-6 md:px-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              Since my first contact I have received a very high level of customer service
              and advice with my kitchen plans. Ben responded very quickly to all of my
              emails and delivery of the kitchen was as planned.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-800 font-semibold font-sans">Jane, Dundee</p>
          </div>
        </div>
        <button className="mt-6 sm:mt-8 md:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#D4B254] transition-colors duration-300 font-sans">FREQUENTLY ASKED QUESTIONS</button>
       </div>
      </Carousel>
      </section>
  )
}

export default Testimonial