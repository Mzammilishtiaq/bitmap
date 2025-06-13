import "./App.css";

import Footer from "./Components/footer";
import Testimonial from "./Components/Testimonial";
import Discover from "./Components/Discover";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <header className="relative w-full overflow-hidden font-sans">
        {/* Main Navigation */}
        <Navbar />
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
    </>
  );
}

export default App;
