import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/tattoo/Footer';

const Tatuadores = () => {
  const artists = [
    {
      id: 1,
      name: "Wall",
      bio: "Fundadora do WALLARCANJO, Wall é uma artista visionária com mais de 15 anos de experiência. Especialista em realismo e fine line, ela transformou sua paixão pela arte em um dos estúdios mais respeitados da cidade.",
      instagram: "@wall_tattoo",
      profileImage: "https://i.pinimg.com/236x/2e/48/9b/2e489bf8ea547b58f98851b6b49e434c.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 2,
      name: "Sérgio Lima",
      bio: "Reconhecido nacionalmente por suas técnicas em black work e ornamental, Sérgio traz 12 anos de experiência e uma abordagem única que mistura tradição e modernidade em cada peça.",
      instagram: "@sergio_lima_tattoo",
      profileImage: "https://i.pinimg.com/236x/34/05/5b/34055b587c5830da3ee49c85fa3de482.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 3,
      name: "Paty",
      bio: "Especialista em tatuagens coloridas, Paty é mestre em aquarela e new school. Sua criatividade e técnica impecável fazem dela uma das artistas mais procuradas para trabalhos vibrantes e únicos.",
      instagram: "@paty_color_tattoo",
      profileImage: "https://i.pinimg.com/236x/a8/1c/8f/a81c8f3f415ce0c58ebc24aaccc5321d.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 4,
      name: "Diego Santos",
      bio: "Especialista em traditional e neo traditional, Diego combina técnicas clássicas com um toque contemporâneo. Seus trabalhos são conhecidos pela precisão e pela riqueza de detalhes.",
      instagram: "@diego_traditional",
      profileImage: "https://i.pinimg.com/236x/25/14/79/251479278227cee9a2007a8f714ca1d5.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 5,
      name: "Marina Flores",
      bio: "Artista delicada especializada em micro tatuagens e botanicals. Marina tem o dom de criar peças minimalistas que carregam grande significado e beleza.",
      instagram: "@marina_micro",
      profileImage: "https://i.pinimg.com/236x/57/cb/13/57cb138bfc75ab4516250874676a577d.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 6,
      name: "Rafael Dark",
      bio: "Mestre em horror e dark art, Rafael cria peças que impressionam pela intensidade e realismo. Sua expertise em sombreamento e contrastes é incomparável.",
      instagram: "@rafael_dark_art",
      profileImage: "https://i.pinimg.com/236x/1c/b7/5e/1cb75eae2eabd17971faa69f26edba95.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 7,
      name: "Luana Geometric",
      bio: "Especialista em tatuagens geométricas e mandala, Luana possui uma precisão matemática que resulta em desenhos perfeitamente simétricos e hipnotizantes.",
      instagram: "@luana_geometric",
      profileImage: "https://i.pinimg.com/236x/dd/59/82/dd5982a8a5435e77a41d034563a314c5.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 8,
      name: "Carlos Tribal",
      bio: "Com raízes na arte tribal, Carlos é especialista em desenhos étnicos e culturais. Cada tatuagem conta uma história ancestral com respeito e autenticidade.",
      instagram: "@carlos_tribal",
      profileImage: "https://i.pinimg.com/236x/c1/e3/cf/c1e3cf5da513e943f82f3bdcebd03402.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    },
    {
      id: 9,
      name: "Ana Script",
      bio: "Mestra em lettering e caligrafia, Ana transforma palavras em arte. Suas tatuagens de frases e nomes são reconhecidas pela elegância e legibilidade perfeita.",
      instagram: "@ana_script",
      profileImage: "https://i.pinimg.com/236x/83/23/e9/8323e93c73d0c0ad6204125c6f7b9f9a.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./lovable-uploads/tattooTeste1.jpg",
        "./lovable-uploads/tattooTeste2.jpg",
        "./lovable-uploads/tattooTeste3.jpg"
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".artist-profile", {
      scrollTrigger: {
        trigger: ".artists-container",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-32 bg-secondary/90 min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nossos Tatuadores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa equipe de artistas talentosos, cada um com sua especialidade única e anos de experiência
          </p>
        </div>

        <div className="artists-container space-y-16">
          {artists.map((artist, index) => (
            <Card key={artist.id} className="artist-profile overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Profile Info */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-6 mb-6">
                    <img 
                      src={artist.profileImage}
                      alt={artist.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-2">{artist.name}</h2>
                      <a 
                        href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-secondary-dark transition-colors"
                      >
                        <Instagram size={20} />
                        <span className="font-medium">{artist.instagram}</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{artist.bio}</p>
                </div>

                {/* Work Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    {artist.workImages.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image}
                          alt={`Trabalho ${imgIndex + 1} de ${artist.name}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tatuadores;
