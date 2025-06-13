import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';

const Tatuadores = () => {
  const artists = [
    {
      id: 1,
      name: "Wall Arcanjo",
      bio: "Fundadora do WALL ARCANJO, Wall é uma artista visionária com mais de 15 anos de experiência. Especialista em realismo e geometrico, ela transformou sua paixão pela arte em um dos estúdios mais respeitados da cidade.",
      instagram: "@walarcanjo",
      profileImage: "./images/Tatuadores/Wall/perfil.png",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
      ]
    },
    {
      id: 2,
      name: "Rodrigo Cunha",
      bio: "Rodrigo Cunha é um tatuador com 8 anos de experiência, cujo interesse pela tatuagem surgiu através da cena hardcore. Ele sempre admirou os artistas das bandas que apreciava com suas tatuagens tradicionais, sentindo-se atraído pela expressão de rebeldia por meio da arte, seja ela sonora ou na pele. Essa paixão deu origem ao seu principal interesse no estilo tradicional americano, popularmente conhecido como Old School. Rodrigo também aprecia e realiza tatuagens Fine Line, aplicando um toque de suavidade que, por vezes, combina com elementos do Old School. Dessa forma, ele transita entre esses estilos, inserindo um pouco de sua personalidade única em cada um de seus trabalhos.",
      instagram: "@cunha.tattoo",
      profileImage: "./images/Tatuadores/Rodrigo/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Rodrigo/tattoo1.jpg",
        "./images/Tatuadores/Rodrigo/tattoo2.jpg",
        "./images/Tatuadores/Rodrigo/tattoo3.jpg",
        "./images/Tatuadores/Rodrigo/tattoo4.jpg"
      ]
    },
    {
      id: 3,
      name: "Michele Moura",
      bio: "Michele Moura, aos 40 anos, possui 17 anos de atuação na área da beleza. Ela é uma profissional multifacetada, especializada em micropigmentação, tatuagem e lash design, além de ministrar cursos nessas áreas. Seu propósito de vida é claro: elevar a autoestima das pessoas e eternizar momentos marcantes através da arte em suas diversas formas de expressão.",
      instagram: "@michelemouralash",
      profileImage: "./images/Tatuadores/Michele/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Michele/tattoo1.jpeg",
        "./images/Tatuadores/Michele/tattoo2.jpeg",
        "./images/Tatuadores/Michele/tattoo3.jpeg",
        "./images/Tatuadores/Michele/tattoo4.jpeg"
      ]
    },
    {
      id: 4,
      name: "Giovanna Cardoso",
      bio: "Giovanna Cardoso é uma tatuadora iniciante com um ano de experiência ativa, mas já com cinco anos de imersão no universo da tatuagem. Após concluir seus estudos com a renomada Wall, ela agora tem a oportunidade de trabalhar ao lado dela no estúdio. Seu estilo principal é o blackwork, mas Giovanna é versátil e adora criar trabalhos exclusivos, dando vida às ideias dos clientes com sua própria visão artística.",
      instagram: "@giocardoso",
      profileImage: "./images/Tatuadores/Giovanna/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Giovanna/tattoo1.jpg",
        "./images/Tatuadores/Giovanna/tattoo2.jpg",
        "./images/Tatuadores/Giovanna/tattoo3.jpg",
        "./images/Tatuadores/Giovanna/tattoo4.jpg"
      ]
    },
    {
      id: 5,
      name: "Kathlyn Sousa",
      bio: "Kathlyn Nascimento de Sousa atua como tatuadora há cerca de 4 anos. Seu primeiro contato com a tatuagem surgiu através da inspiração de um amigo tatuador, o que a motivou a mergulhar profundamente nesse universo. Desde então, Kathlyn tem se dedicado intensamente ao estudo e à prática da arte na pele, passando por diversas formações e atendimentos que solidificaram sua técnica, aprimoraram seu olhar artístico e fortaleceram sua conexão com cada projeto que realiza. Seu estilo transita com fluidez entre personagens, elementos botânicos e composições autorais, sempre com um olhar atento à estética Art Nouveau e ao neotradicional, estilo pelo qual nutre grande paixão e no qual busca constante especialização.",
      instagram: "@kathynip_arts",
      profileImage: "./images/Tatuadores/Kathlyn/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Kathlyn/tattoo1.jpeg",
        "./images/Tatuadores/Kathlyn/tattoo2.jpeg",
        "./images/Tatuadores/Kathlyn/tattoo3.jpeg",
        "./images/Tatuadores/Kathlyn/tattoo4.jpeg"
      ]
    },
    {
      id: 6,
      name: "Rogério de Araújo",
      bio: "Rogério de Araújo, conhecido como MAGAL TATTOO, iniciou sua jornada profissional em 1994, aos 19 anos, em um estúdio na renomada Galeria do Rock. Aos 24 anos, inaugurou seu primeiro estúdio na cidade de São Paulo, na região do Tatuapé. No ano 2000, com 26 anos, Magal abriu um estúdio no bairro de São Mateus, que se tornou o primeiro da região e é referência para profissionais e clientes amantes da arte da tatuagem até os dias atuais. Com 31 anos de experiência na área da tatuagem e piercing, Magal Tattoo, além de artista e profissional, dedica-se ao ensino da arte da tatuagem. Ele compartilha seu conhecimento com aqueles que desejam iniciar nessa maravilhosa arte, seja para formar futuros profissionais ou para artistas que buscam expandir seus horizontes criativos. Como ele mesmo diz: A persistência leva à perfeição.",
      instagram: "@magaltattoo",
      profileImage: "./images/Tatuadores/Rogerio/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Rogerio/tattoo1.jpeg",
        "./images/Tatuadores/Rogerio/tattoo2.jpeg",
        "./images/Tatuadores/Rogerio/tattoo3.jpeg",
        "./images/Tatuadores/Rogerio/tattoo4.jpeg"
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
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
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
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
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
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
      ]
    },
    {
      id: 10,
      name: "Luiza Sanches",
      bio: "Mestra em lettering e caligrafia, Luiza transforma palavras em arte. Suas tatuagens de frases e nomes são reconhecidas pela elegância e legibilidade perfeita.",
      instagram: "@ana_script",
      profileImage: "https://i.pinimg.com/736x/a9/df/33/a9df339ff059dede8342b12fda88a1c7.jpg",
      workImages: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400",
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
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
                      className="w-32 h-32 rounded-full object-cover"
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
