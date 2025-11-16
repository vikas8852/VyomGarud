import Ract from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from "../Shared/SectionHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
      <SectionHeader 
        title="Get In" 
        highlightedText="Touch"
        subtitle="Let's discuss how VyomGarud can elevate your defense capabilities"
      />
      <ContactForm />
    </section>
  );
};

export default Contact;