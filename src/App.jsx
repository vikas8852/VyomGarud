import React from "react";
import Hero from "./components/Hero.jsx";  
import About from "./components/About.jsx";
import Capabilities from "./Capabilities/Capabilities.jsx";
import Highlights from "./Highlights/Highlights.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer.jsx";

const VyomGarudLanding = () => {
  return (
    <div className="bg-neutral-900 text-white font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default VyomGarudLanding;