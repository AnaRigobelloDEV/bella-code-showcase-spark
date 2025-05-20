import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard administrativo para plataforma de e-commerce com análise de dados em tempo real.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "web",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Aplicativo de Fitness",
    description: "Aplicativo mobile para acompanhamento de treinos e planos nutricionais personalizados.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "API de Pagamentos",
    description: "Sistema de processamento de pagamentos com integração a múltiplas plataformas.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Site Institucional",
    description: "Website responsivo para empresa de arquitetura com galeria de projetos e blog integrado.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Sistema de Gestão",
    description: "Plataforma para gestão de equipes e projetos com ferramentas de colaboração.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "backend",
    technologies: ["Django", "PostgreSQL", "Redis", "AWS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Aplicativo de Delivery",
    description: "App de entrega de comida com rastreamento em tempo real e sistema de avaliação.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    liveLink: "#",
    githubLink: "#"
  }
];

type Category = 'all' | 'web' | 'mobile' | 'backend';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (portfolioRef.current) {
      // Animate heading
      gsap.from(".portfolio-heading", {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      // Animate filter buttons
      gsap.from(".filter-button", {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5
      });
      
      // Create a new animation for project cards whenever they change
      const animateProjects = () => {
        gsap.fromTo(".project-card", 
          { opacity: 0, y: 30 }, 
          { 
            opacity: 1, 
            y: 0, 
            stagger: 0.1, 
            duration: 0.6,
            ease: "power3.out"
          }
        );
      };
      
      // Run once on initial render
      animateProjects();
      
      // Setup an animation for when the filtered projects change
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.target.classList.contains('projects-grid')) {
            animateProjects();
          }
        });
      });
      
      // Start observing
      const projectsGrid = portfolioRef.current.querySelector('.projects-grid');
      if (projectsGrid) {
        observer.observe(projectsGrid, { childList: true });
      }
      
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        observer.disconnect();
      };
    }
  }, []);
  
  // Re-trigger animation when filtered projects change
  useEffect(() => {
    gsap.fromTo(".project-card", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5,
        ease: "power2.out"
      }
    );
  }, [filteredProjects]);
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };
  
  return (
    <section id="portfolio" ref={portfolioRef} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="portfolio-heading section-heading">Meu Portfólio</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {['all', 'web', 'mobile', 'backend'].map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category as Category)}
              className={`filter-button px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-cherry text-white' 
                  : 'bg-transparent text-white border border-gray-700 hover:border-cherry'
              }`}
            >
              {category === 'all' ? 'Todos' : category === 'web' ? 'Web' : category === 'mobile' ? 'Mobile' : 'Backend'}
            </Button>
          ))}
        </div>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <Card className="bg-black/50 border border-gray-800 overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                </div>
                <div className="p-6">
                  <h3 className="text-gold text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-cherry/30 text-white border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
