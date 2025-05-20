
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Server, Smartphone, Code, PencilRuler, Search } from 'lucide-react';

const serviceItems = [
  {
    icon: <Globe size={40} className="text-cherry" />,
    title: "Desenvolvimento Web",
    description: "Criação de sites responsivos e intuitivos com as tecnologias mais modernas do mercado.",
  },
  {
    icon: <Server size={40} className="text-cherry" />,
    title: "Desenvolvimento Backend",
    description: "Implementação de APIs robustas e sistemas escaláveis com arquiteturas otimizadas.",
  },
  {
    icon: <Smartphone size={40} className="text-cherry" />,
    title: "Desenvolvimento Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com experiência de usuário de alto nível.",
  },
  {
    icon: <Code size={40} className="text-cherry" />,
    title: "Integração de APIs",
    description: "Conexão e integração de sistemas com serviços externos e plataformas de terceiros.",
  },
  {
    icon: <PencilRuler size={40} className="text-cherry" />,
    title: "UI/UX Design",
    description: "Design de interfaces modernas, acessíveis e agradáveis, focadas na experiência do usuário.",
  },
  {
    icon: <Search size={40} className="text-cherry" />,
    title: "Consultoria Tecnológica",
    description: "Análise e recomendação de soluções tecnológicas para o seu negócio ou projeto.",
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (servicesRef.current) {
      // Animate heading
      gsap.from(".services-heading", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      // Animate service cards
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="services" ref={servicesRef} className="py-20 px-4 bg-black/80">
      <div className="container mx-auto">
        <h2 className="services-heading section-heading">Meus Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card h-full">
              <Card className="bg-black border border-gray-800 p-6 h-full transition-all duration-300 hover:border-cherry hover:shadow-lg hover:shadow-cherry/20">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-gold text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/70 flex-grow">{service.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
