import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-16 px-4 md:px-8 border-t border-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff7b00]/5 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-4xl font-bold mb-3">
              Vyom<span className="text-[#ff7b00]">Garud</span>
            </h3>
            <p className="text-neutral-400 mb-4">Precision in Every Flight</p>
            <p className="text-neutral-500 text-sm max-w-xs">
              Leading the future of autonomous aerial defense systems with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#ff7b00]">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-neutral-400 hover:text-[#ff7b00] transition-colors">About Us</a>
              <a href="#capabilities" className="text-neutral-400 hover:text-[#ff7b00] transition-colors">Capabilities</a>
              <a href="#contact" className="text-neutral-400 hover:text-[#ff7b00] transition-colors">Contact</a>
              <a href="#careers" className="text-neutral-400 hover:text-[#ff7b00] transition-colors">Careers</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#ff7b00]">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end mb-4">
              {['linkedin', 'twitter', 'youtube'].map((social, idx) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-neutral-800 hover:bg-[#ff7b00] rounded-full flex items-center justify-center transition-all"
                >
                  <span className="text-white text-sm font-bold uppercase">{social[0]}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-neutral-500 text-sm">info@vyomgarud.com</p>
          </motion.div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} VyomGarud. All rights reserved. | Defense Systems Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;