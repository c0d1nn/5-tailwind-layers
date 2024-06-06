import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;