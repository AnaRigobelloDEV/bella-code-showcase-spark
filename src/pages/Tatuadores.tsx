
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Tatuadores = () => {
  const artists = [
    {
      id: 1,
      name: "Wall",
      bio: "Fundadora do WALLARCANJO, Wall é uma artista visionária com mais de 15 anos de experiência. Especialista em realismo e fine line, ela transformou sua paixão pela arte em um dos estúdios mais respeitados da cidade.",
      instagram: "@wall_tattoo",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b332c634?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 2,
      name: "Sérgio Lima",
      bio: "Reconhecido nacionalmente por suas técnicas em black work e ornamental, Sérgio traz 12 anos de experiência e uma abordagem única que mistura tradição e modernidade em cada peça.",
      instagram: "@sergio_lima_tattoo",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 3,
      name: "Paty",
      bio: "Especialista em tatuagens coloridas, Paty é mestre em aquarela e new school. Sua criatividade e técnica impecável fazem dela uma das artistas mais procuradas para trabalhos vibrantes e únicos.",
      instagram: "@paty_color_tattoo",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 4,
      name: "Diego Santos",
      bio: "Especialista em traditional e neo traditional, Diego combina técnicas clássicas com um toque contemporâneo. Seus trabalhos são conhecidos pela precisão e pela riqueza de detalhes.",
      instagram: "@diego_traditional",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 5,
      name: "Marina Flores",
      bio: "Artista delicada especializada em micro tatuagens e botanicals. Marina tem o dom de criar peças minimalistas que carregam grande significado e beleza.",
      instagram: "@marina_micro",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 6,
      name: "Rafael Dark",
      bio: "Mestre em horror e dark art, Rafael cria peças que impressionam pela intensidade e realismo. Sua expertise em sombreamento e contrastes é incomparável.",
      instagram: "@rafael_dark_art",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 7,
      name: "Luana Geometric",
      bio: "Especialista em tatuagens geométricas e mandala, Luana possui uma precisão matemática que resulta em desenhos perfeitamente simétricos e hipnotizantes.",
      instagram: "@luana_geometric",
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 8,
      name: "Carlos Tribal",
      bio: "Com raízes na arte tribal, Carlos é especialista em desenhos étnicos e culturais. Cada tatuagem conta uma história ancestral com respeito e autenticidade.",
      instagram: "@carlos_tribal",
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
      ]
    },
    {
      id: 9,
      name: "Ana Script",
      bio: "Mestra em lettering e caligrafia, Ana transforma palavras em arte. Suas tatuagens de frases e nomes são reconhecidas pela elegância e legibilidade perfeita.",
      instagram: "@ana_script",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"
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
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
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
    </div>
  );
};

export default Tatuadores;
