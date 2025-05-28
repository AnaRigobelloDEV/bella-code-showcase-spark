import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/tattoo/Footer';

const Home = () => {
  const featuredArtists = [
    {
      id: 1,
      name: "Wall",
      title: "Fundadora & Tatuadora",
      specialty: "Realismo e Fine Line",
      instagram: "@wall_tattoo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c634?w=400"
    },
    {
      id: 2,
      name: "Sérgio Lima",
      title: "Tatuador Principal",
      specialty: "Black Work e Ornamental",
      instagram: "@sergio_lima_tattoo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 3,
      name: "Paty",
      title: "Especialista em Cores",
      specialty: "Aquarela e New School",
      instagram: "@paty_color_tattoo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Artists cards animation
    gsap.from(".artist-card", {
      scrollTrigger: {
        trigger: ".artists-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.6
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1920')"
          }}
        ></div>
        
        <div className="hero-content container mx-auto px-4 text-center relative z-10">
          <img 
            src="/lovable-uploads/6c90fed9-fe15-42f4-bdb2-32d5a7f26e8d.png"
            alt="WALLARCANJO Logo"
            className="h-32 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Arte que Marca Sua História
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            No WALLARCANJO, transformamos suas ideias em obras de arte únicas. 
            Com mais de 10 anos de experiência, nosso estúdio une tradição e 
            inovação para criar tatuagens que contam sua história.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 text-lg">
              <Link to="/tatuadores">Conheça Nossos Artistas</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
              <Link to="/contato">Agende uma Consulta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Studio Proposal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Nossa Proposta</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Arte Personalizada</h3>
                <p className="text-gray-600">
                  Cada tatuagem é única, criada especialmente para você com base em suas ideias e nossa expertise artística.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Segurança Total</h3>
                <p className="text-gray-600">
                  Seguimos todos os protocolos de saúde e utilizamos apenas materiais descartáveis e equipamentos esterilizados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Formação Profissional</h3>
                <p className="text-gray-600">
                  Oferecemos cursos completos para quem deseja se profissionalizar na arte da tatuagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="artists-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossos Artistas em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os tatuadores que fazem do WALLARCANJO referência em qualidade e criatividade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <Card key={artist.id} className="artist-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{artist.name}</h3>
                  <p className="text-secondary font-medium mb-2">{artist.title}</p>
                  <p className="text-gray-600 mb-4">{artist.specialty}</p>
                  <a 
                    href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Instagram size={20} />
                    <span>{artist.instagram}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg">
              <Link to="/tatuadores">Ver Todos os Tatuadores</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quer Aprender a Arte da Tatuagem?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Oferecemos cursos completos desde o básico até técnicas avançadas. 
            Aprenda com os melhores profissionais e transforme sua paixão em profissão.
          </p>
          <Button asChild className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 text-lg">
            <Link to="/cursos">Explorar Cursos</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
