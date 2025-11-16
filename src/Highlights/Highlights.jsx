import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from "../Shared/SectionHeader";
import HighlightCard from "./HighlightCards";


const Highlights = () => {
  const highlights = [
    { 
      title: "Military-Grade Reliability", 
      desc: "Rigorously tested in extreme environments and combat scenarios" 
    },
    { 
      title: "AI-Driven Control", 
      desc: "Neural networks enabling smart autonomous decision-making" 
    },
    { 
      title: "Precision Engineering", 
      desc: "Sub-meter accuracy with redundant safety systems" 
    }
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjdiMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Why Choose" 
          highlightedText="VyomGarud"
          subtitle="Uncompromising excellence in every aspect of aerial operations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <HighlightCard key={idx} highlight={highlight} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;