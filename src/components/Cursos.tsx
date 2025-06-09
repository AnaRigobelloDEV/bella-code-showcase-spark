import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';

const Cursos = () => {
  const courses = [
    {
      id: 1,
      name: "Curso Básico de Tatuagem",
      description: "Aprenda os fundamentos da tatuagem, desde higienização até técnicas básicas de sombreamento e traço.",
      duration: "40 horas",
      students: "12 alunos",
      level: "Iniciante",
      price: "R$ 1.200",
      image: "https://i.pinimg.com/236x/70/d0/7a/70d07aeb497442d3c88bb95d941aeedb.jpg",
      topics: ["Higienização e segurança", "Equipamentos básicos", "Técnicas de traço", "Sombreamento inicial"]
    },
    {
      id: 2,
      name: "Realismo em Tatuagem",
      description: "Domine as técnicas avançadas de realismo, incluindo retrato e paisagens com qualidade fotográfica.",
      duration: "60 horas",
      students: "8 alunos",
      level: "Avançado",
      price: "R$ 2.500",
      image: "https://i.pinimg.com/236x/32/fc/32/32fc32a3c4730884c586c81153bb359d.jpg",
      topics: ["Estudo de luz e sombra", "Técnicas de realismo", "Retratos em pele", "Texturas avançadas"]
    },
    {
      id: 3,
      name: "Tatuagem Colorida",
      description: "Especialização em técnicas de cor, desde aquarela até new school vibrante.",
      duration: "45 horas",
      students: "10 alunos",
      level: "Intermediário",
      price: "R$ 1.800",
      image: "https://i.pinimg.com/236x/c3/d3/73/c3d3738cf866eff1a582d92438670bec.jpg",
      topics: ["Teoria das cores", "Técnicas de aquarela", "New school", "Degradês e transições"]
    },
    {
      id: 4,
      name: "Fine Line e Minimalismo",
      description: "Aprenda a criar tatuagens delicadas e precisas com traços finos e design minimalista.",
      duration: "30 horas",
      students: "15 alunos",
      level: "Intermediário",
      price: "R$ 1.500",
      image: "https://i.pinimg.com/236x/83/a1/d8/83a1d8310b90e83e051be68434afb82d.jpg",
      topics: ["Técnicas de traço fino", "Design minimalista", "Micro tatuagens", "Precisão em detalhes"]
    },
    {
      id: 5,
      name: "Geometric e Mandala",
      description: "Domine a arte das formas geométricas perfeitas e mandalas complexas.",
      duration: "35 horas",
      students: "12 alunos",
      level: "Intermediário",
      price: "R$ 1.600",
      image: "https://i.pinimg.com/736x/69/7e/34/697e346558fa89d489c2dac697e0b4e8.jpg",
      topics: ["Geometria aplicada", "Mandalas tradicionais", "Simetria perfeita", "Patterns complexos"]
    },
    {
      id: 6,
      name: "Business da Tatuagem",
      description: "Aprenda a empreender no ramo da tatuagem, desde marketing até gestão de estúdio.",
      duration: "20 horas",
      students: "20 alunos",
      level: "Todos os níveis",
      price: "R$ 800",
      image: "https://i.pinimg.com/236x/e9/f8/62/e9f8624f0e03b4298fbdc19fde36974d.jpg",
      topics: ["Marketing digital", "Gestão financeira", "Atendimento ao cliente", "Precificação"]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".course-card", {
      scrollTrigger: {
        trigger: ".courses-grid",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.6
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avançado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="pt-32 bg-secondary/90 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nossos Cursos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforme sua paixão em profissão com nossos cursos completos de tatuagem. 
            Aprenda com os melhores profissionais do mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="text-primary" size={20} />
              <span className="text-primary font-medium">Certificado Reconhecido</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Users className="text-primary" size={20} />
              <span className="text-primary font-medium">Turmas Reduzidas</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Award className="text-primary" size={20} />
              <span className="text-primary font-medium">Certificado de Conclusão</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="course-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem]">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">O que você vai aprender:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                    {course.topics.length > 3 && (
                      <li className="text-secondary text-sm">+ {course.topics.length - 3} tópicos</li>
                    )}
                  </ul>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark text-white mt-auto">
                  Saiba Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual curso é ideal para o seu nível e objetivos. 
            Nossa equipe está pronta para ajudar você a se tornar um tatuador profissional.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
          <Link to="/contato">Fale conosco</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cursos;
