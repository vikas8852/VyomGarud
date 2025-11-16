import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const HighlightCard = ({ highlight, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.08, y: -10 }}
      className="group relative text-center p-12 bg-gradient-to-br from-neutral-800/60 to-neutral-900/80 rounded-3xl border border-neutral-700 hover:border-[#ff7b00] transition-all duration-500 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/10 group-hover:to-orange-600/10 transition-all duration-500" />
      
      <div className="relative z-10">
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-[#ff7b00]/30 to-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-[#ff7b00]/50 group-hover:to-orange-600/50 transition-all shadow-lg shadow-[#ff7b00]/20"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-10 bg-[#ff7b00] rounded-full group-hover:shadow-2xl group-hover:shadow-[#ff7b00]/50 transition-all" />
        </motion.div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#ff7b00] transition-colors">
          {highlight.title}
        </h3>
        
        <p className="text-neutral-400 text-lg group-hover:text-neutral-300 transition-colors">
          {highlight.desc}
        </p>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff7b00]/10 rounded-full blur-3xl group-hover:bg-[#ff7b00]/20 transition-all duration-500" />
    </motion.div>
  );
};

export default HighlightCard;