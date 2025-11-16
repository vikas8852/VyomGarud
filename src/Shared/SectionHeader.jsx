import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionHeader = ({ title, highlightedText, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block mb-6"
      >
        <div className="px-4 py-1 bg-[#ff7b00]/10 border border-[#ff7b00]/30 rounded-full">
          <span className="text-[#ff7b00] text-sm font-semibold tracking-wider uppercase">Excellence in Engineering</span>
        </div>
      </motion.div>
      <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        {title} <span className="text-[#ff7b00]">{highlightedText}</span>
      </h2>
      <motion.div 
        className="w-24 h-1.5 bg-gradient-to-r from-[#ff7b00] to-orange-600 mx-auto rounded-full mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      {subtitle && (
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;