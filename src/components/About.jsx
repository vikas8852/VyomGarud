
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          About <span className="text-[#ff7b00]">VyomGarud</span>
        </h2>
        <div className="w-20 h-1 bg-[#ff7b00] mx-auto mb-10" />
        <p className="text-xl text-neutral-300 leading-relaxed">
         VyomGarud is shaping the future of unmanned aerial systems with next-generation technology built for defense and mission-critical operations. Our goal is to provide dependable, autonomous UAV solutions that elevate precision, security, and performance. With advanced AI capabilities and military-grade engineering, we ensure every mission delivers maximum impact and protection where it matters most.
        </p>
      </motion.div>
    </section>
  );
};
export default About;