import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

type Category = 'all' | 'web' | 'mobile' | 'backend';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'BellaCode Website',
    description: 'Website institucional da BellaCode, apresentando serviços e portfólio.',
    image: 'https://images.unsplash.com/photo-1661956602153-2338e54194ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA==',
    category: 'web',
    technologies: ['React', 'Tailwind CSS', 'Vite']
  },
  {
    id: 2,
    title: 'Mobile App Dashboard',
    description: 'Dashboard para gerenciamento de dados de um aplicativo mobile.',
    image: 'https://images.unsplash.com/photo-1555059700-28d8c4aa3183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA==',
    category: 'mobile',
    technologies: ['React Native', 'Firebase']
  },
  {
    id: 3,
    title: 'E-commerce Backend API',
    description: 'API para um e-commerce, com autenticação, gerenciamento de produtos e pagamentos.',
    image: 'https://images.unsplash.com/photo-1518770660439-464ef50ce906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2VuZHxlbnwwfHwwfHx8MA==',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 4,
    title: 'Landing Page de Evento',
    description: 'Landing page para um evento, com informações, formulário de inscrição e mapa.',
    image: 'https://images.unsplash.com/photo-1486312339633-3241e19c9024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWduc3xlbnwwfHwwfHx8MA==',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 5,
    title: 'App de Lista de Tarefas',
    description: 'Aplicativo mobile para gerenciamento de tarefas, com notificações e sincronização na nuvem.',
    image: 'https://images.unsplash.com/photo-1542903660-7d611b5804de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA==',
    category: 'mobile',
    technologies: ['Flutter', 'Dart']
  },
  {
    id: 6,
    title: 'API de Gerenciamento de Usuários',
    description: 'API para gerenciamento de usuários, com autenticação, autorização e roles.',
    image: 'https://images.unsplash.com/photo-1542831323-539828069470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmFnZW18ZW58MHx8MHx8fDA=',
    category: 'backend',
    technologies: ['Python', 'Django', 'PostgreSQL']
  }
];

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
      gsap.from(".portfolio-heading", {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      gsap.from(".filter-button", {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6
      });
      
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="portfolio" ref={portfolioRef} className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="portfolio-heading section-heading">Portfólio</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'Todos' },
            { key: 'web', label: 'Web' },
            { key: 'mobile', label: 'Mobile' },
            { key: 'backend', label: 'Backend' }
          ].map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveCategory(category.key as Category)}
              className={`filter-button ${
                activeCategory === category.key
                  ? 'bg-cherry text-white'
                  : 'bg-transparent border border-gray-600 text-white hover:bg-cherry hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card bg-black/50 border border-gray-800 overflow-hidden group hover:border-cherry transition-colors">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" className="bg-cherry hover:bg-cherry/80 text-white">
                    <ExternalLink size={16} />
                  </Button>
                  <Button size="sm" className="bg-gold hover:bg-gold/80 text-black">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="bg-cherry hover:bg-cherry/80 text-white flex-1">
                    Ver Projeto
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
