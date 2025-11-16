import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import drone from "./drone.jpg"; 

// Hero Component
const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-neutral-900/60 to-neutral-900 z-10"></div>
        <img 
          src={drone} 
          alt="UAV Drone"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-6xl w-full">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full backdrop-blur-sm">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Next-Gen Defense Systems</span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
          Vyom<span className="text-orange-500">Garud</span>
        </h1>
        
        <p className="text-2xl sm:text-3xl md:text-4xl mb-4 text-white font-light tracking-wide">
         Engineered for Absolute Precision
        </p>
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 px-4">
        Transforming aerial supremacy with intelligent autonomous systems
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <button className="w-full sm:w-auto bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            Explore Our Systems
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white px-12 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105">
            Request Demo
          </button>
        </div>
      </div>

      {/* <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-neutral-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-wider">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button> */}
    </section>
  );
};

 export default Hero;