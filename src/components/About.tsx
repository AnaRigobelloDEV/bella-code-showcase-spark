
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (aboutRef.current) {
      // Animate heading
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      // Animate content
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
      });
      
      // Animate skills
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="about-heading section-heading">Sobre Mim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="about-content">
            <Card className="bg-black/50 border border-gray-800 p-6 h-full">
              <p className="text-white/80 mb-4">
                Olá! Sou Bella, uma desenvolvedora apaixonada por criar soluções digitais que combinam 
                estética e funcionalidade. Com mais de 5 anos de experiência no desenvolvimento web 
                e mobile, meu objetivo é transformar conceitos complexos em interfaces intuitivas e acessíveis.
              </p>
              <p className="text-white/80 mb-4">
                Minha jornada na tecnologia começou na faculdade de Ciência da Computação, e desde 
                então venho me especializando em tecnologias front-end e back-end, sempre buscando as 
                melhores práticas e inovações do mercado.
              </p>
              <p className="text-white/80">
                Acredito que o bom código é como boa escrita: claro, conciso e elegante. 
                Com esse princípio em mente, dedico-me a criar soluções que não apenas funcionem bem, 
                mas que também sejam sustentáveis e escaláveis para o futuro.
              </p>
            </Card>
          </div>
          
          <div className="about-content skills-section">
            <Card className="bg-black/50 border border-gray-800 p-6 h-full">
              <h3 className="text-gold text-xl font-semibold mb-4">Minhas Habilidades</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "JavaScript/TypeScript", "React/Next.js", 
                  "Node.js", "HTML/CSS", 
                  "Python", "Django", 
                  "SQL/NoSQL", "AWS", 
                  "UI/UX Design", "Git/GitHub", 
                  "Mobile (React Native)", "RESTful APIs"
                ].map((skill, index) => (
                  <div key={index} className="skill-item flex items-center">
                    <div className="w-2 h-2 bg-cherry rounded-full mr-2"></div>
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
