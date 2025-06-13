import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headerimage from '../assets/header.png';
function Hero() {
  return (
    <Carousel 
          showArrows={false} 
          showThumbs={false} 
          showStatus={false} 
          showIndicators={true}
          className="w-full"
          renderIndicator={(onClickHandler, isSelected, label) => {
            return (
              <button
                onClick={onClickHandler}
                className={`w-10 h-1 mx-1  transition-all duration-300 ${
                  isSelected ? 'bg-[#D4B254]' : 'bg-white'
                }`}
                aria-label={String(label)}
              />
            );
          }}
        >
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${headerimage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8">
              <p className="text-xs sm:text-sm tracking-widest uppercase font-sans">DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Bespoke & made to measure handmade kitchen design</h1>
              <button className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold hover:bg-[#D4B254] transition-colors duration-300 font-sans rounded-full">ORDER NOW</button>
            </div>
          </div>
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${headerimage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8">
              <p className="text-xs sm:text-sm tracking-widest uppercase font-sans">DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Bespoke & made to measure handmade kitchen design</h1>
              <button className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold hover:bg-[#D4B254] transition-colors duration-300 font-sans rounded-full">ORDER NOW</button>
            </div>
          </div>
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${headerimage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8">
              <p className="text-xs sm:text-sm tracking-widest uppercase font-sans">DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-2 sm:mt-4 leading-tight font-sans">Bespoke & made to measure handmade kitchen design</h1>
              <button className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold hover:bg-[#D4B254] transition-colors duration-300 font-sans rounded-full">ORDER NOW</button>
            </div>
          </div>
        </Carousel>
  )
}

export default Hero