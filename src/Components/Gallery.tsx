import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
function Gallery() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">Customer Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
          <img src={gallery1} alt="Gallery Image 1" className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg" />
          <img src={gallery2} alt="Gallery Image 2" className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg" />
          <img src={gallery3} alt="Gallery Image 3" className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg" />
          <img src={gallery4} alt="Gallery Image 4" className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg" />
        </div>
        <button className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4B254] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#D4B254] transition-colors duration-300">VIEW MORE</button>
      </section>
  )
}

export default Gallery