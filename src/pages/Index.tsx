
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Index = () => {
  useEffect(() => {
    // Load GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Update the title of the page
    document.title = "BELLA CODE | Desenvolvimento Web & Mobile";
    
    return () => {
      // Cleanup all ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
