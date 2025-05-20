
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline();
      
      // Animate the headline
      tl.from(".hero-title span", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Animate the subtitle
      tl.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");
      
      // Animate the button
      tl.from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.3");
    }
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16"
    >
      {/* Background animation - dots pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, rgba(210, 4, 45, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      
      <div ref={textRef} className="text-center relative z-10 max-w-4xl">
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="inline-block text-gold">Transformando </span>
          <span className="inline-block text-gold">ideias </span>
          <span className="inline-block text-cherry">em </span>
          <span className="inline-block text-gold">código</span>
        </h1>
        
        <p className="hero-subtitle text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Desenvolvedora Front-end e Back-end especializada em criar experiências 
          digitais elegantes, intuitivas e de alto desempenho.
        </p>
        
        <Button 
          onClick={scrollToAbout} 
          className="hero-button bg-cherry hover:bg-cherry/80 text-white py-2 px-6 rounded-md font-medium text-lg flex items-center gap-2"
        >
          Conheça meu trabalho
          <ArrowDown size={16} />
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown size={32} className="text-cherry" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
