import handmadeimage from '../assets/handmade.png'
function Discover() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
    <div className="w-full md:w-1/2">
      <img 
        src={handmadeimage} 
        alt="Handmade Kitchen" 
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-lg" 
      />
    </div>
    <div className="w-full md:w-1/2 md:pl-8 lg:pl-16 mt-6 sm:mt-8 md:mt-0 text-center md:text-left">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 font-sans">QUALITY CRAFTSMANSHIP FROM BUILD TO DELIVERY</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 leading-tight font-sans">Discover the beauty of a handmade kitchen</h2>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-700 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, metus quam ultricies.</p>
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#D4B254] transition-colors duration-300 font-sans">ABOUT US</button>
    </div>
  </section>
  )
}

export default Discover