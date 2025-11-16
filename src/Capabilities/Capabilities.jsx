import React from 'react';
import SectionHeader from "../Shared/SectionHeader";
import CapabilityCard from './CapabilityCard';
import { motion, useScroll, useTransform } from 'framer-motion';


const Capabilities = () => {
  const capabilities = [
    {
      title: "Autonomous Navigation",
      description: "Advanced AI-powered flight systems with real-time obstacle detection, dynamic route optimization, and adaptive mission planning in complex environments.",
      icon: "🛸"
    },
    {
      title: "Surveillance Systems",
      description: "Military-grade high-resolution imaging with thermal, infrared, and night vision capabilities for comprehensive 24/7 reconnaissance operations.",
      icon: "📡"
    },
    {
      title: "Payload Delivery",
      description: "Precision drop systems with GPS-guided accuracy and intelligent release mechanisms for critical mission requirements and emergency response.",
      icon: "📦"
    },
    {
      title: "AI Control Systems",
      description: "Next-generation machine learning algorithms for adaptive flight control, swarm coordination, and autonomous mission execution.",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#ff7b00]/5 via-transparent to-transparent opacity-30 -z-10" />
      
      <SectionHeader 
        title="Our" 
        highlightedText="Capabilities"
        subtitle="Cutting-edge technology powering the future of aerial defense"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((cap, idx) => (
          <CapabilityCard key={idx} capability={cap} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Capabilities;