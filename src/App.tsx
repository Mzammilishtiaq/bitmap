import "./App.css";

import Footer from "./Components/footer";
import Testimonial from "./Components/Testimonial";
import Discover from "./Components/Discover";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <header className="relative w-full overflow-hidden font-sans">
        {/* Main Navigation */}
        <div className="top-0 left-0 right-0 z-10" style={{position:'fixed'}}>
        <Navbar />
        </div>
        {/* Hero Section */}
        <Hero />
      </header>
      {/* Discover Section */}
      <Discover />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Customer Gallery */}
      <Gallery />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
