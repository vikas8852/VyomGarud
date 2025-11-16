import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const CapabilityCard = ({ capability, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ 
        y: -15, 
        boxShadow: "0 25px 50px rgba(255, 123, 0, 0.3)",
        borderColor: "rgba(255, 123, 0, 0.8)"
      }}
      className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/80 backdrop-blur-sm border border-neutral-700 p-10 rounded-3xl transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/5 group-hover:to-orange-600/5 transition-all duration-500" />
      
      <div className="relative z-10">
        <motion.div 
          className="text-6xl mb-6 filter drop-shadow-lg"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {capability.icon}
        </motion.div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff7b00] group-hover:text-orange-400 transition-colors">
          {capability.title}
        </h3>
        
        <p className="text-neutral-400 leading-relaxed text-base group-hover:text-neutral-300 transition-colors">
          {capability.description}
        </p>

        <motion.div
          className="mt-6 flex items-center text-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm font-semibold mr-2">Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7b00]/5 rounded-full blur-3xl group-hover:bg-[#ff7b00]/10 transition-all duration-500" />
    </motion.div>
  );
};


export default CapabilityCard;