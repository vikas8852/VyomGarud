import React from "react";
import { useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/5 to-orange-600/5 rounded-3xl blur-3xl -z-10" />
      
      <div className="relative">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused('')}
          required
          className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-8 py-5 text-lg focus:outline-none focus:border-[#ff7b00] focus:bg-neutral-800/80 transition-all backdrop-blur-sm"
        />
        {focused === 'name' && (
          <motion.div 
            layoutId="focusBar"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff7b00]"
          />
        )}
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
          required
          className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-8 py-5 text-lg focus:outline-none focus:border-[#ff7b00] focus:bg-neutral-800/80 transition-all backdrop-blur-sm"
        />
        {focused === 'email' && (
          <motion.div 
            layoutId="focusBar"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff7b00]"
          />
        )}
      </div>

      <div className="relative">
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
          required
          rows="6"
          className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-8 py-5 text-lg focus:outline-none focus:border-[#ff7b00] focus:bg-neutral-800/80 transition-all resize-none backdrop-blur-sm"
        />
        {focused === 'message' && (
          <motion.div 
            layoutId="focusBar"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff7b00]"
          />
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(255, 123, 0, 0.4)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-[#ff7b00] to-orange-600 text-white px-8 py-6 rounded-xl text-xl font-semibold hover:from-[#e66d00] hover:to-orange-700 transition-all shadow-2xl shadow-[#ff7b00]/30"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};


export default ContactForm;