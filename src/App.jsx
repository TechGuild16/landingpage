import About from "./components/about/About";
import Amenities from "./components/Amenties/Amenities";
import Features from "./components/features/Features";
import Contact from "./components/finalform/Contact";
import FloorPlan from "./components/floorplan/FloorPlan";
import Footer from "./components/footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/hero/Hero";
import MapSec from "./components/map/MapSec";
import NavigationBar from "./components/Navbar/NavigationBar";
import PopupForm from "./components/PopupForm";
import Price from "./components/price/Price";



function App() {

  return (
    <>
        <NavigationBar />
        <Hero />
        <About />
        <Features />
        <Amenities />
        <Price />
        <FloorPlan />
        <PopupForm />
        <Gallery />
        <MapSec />
        <Contact />
        <Footer />
      </>
  )
}

export default App
