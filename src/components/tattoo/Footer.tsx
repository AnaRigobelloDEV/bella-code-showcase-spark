
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const allTattooArtists = [
    "@wall_tattoo",
    "@sergio_lima_tattoo", 
    "@paty_color_tattoo",
    "@carlos_blackwork",
    "@ana_fineline",
    "@rodrigo_traditional",
    "@julia_watercolor",
    "@marcos_geometric",
    "@leticia_minimalist"
  ];

  return (
    <footer className="bg-[#09626A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/logo2.png"
              alt="WALLARCANJO Logo"
              className="h-16 w-auto"
            />
            <p className="text-white/90">
              Arte que marca sua história. Estúdio de tatuagem e academia profissionalizante.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="text-white/90">Rua Vergueiro, 2999 - Vila Mariana, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.5} />
                <span className="text-white/90">(11) 95218-1320</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-white/90">Terça à Domingo: 24h</p>
                  <p className="text-white/90">Terça: a partir das 9h</p>
                  <p className="text-white/90">Domingo: até 20h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram dos Tatuadores */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Nossos Artistas</h3>
            <div className="grid grid-cols-2 gap-2">
              {allTattooArtists.map((instagram, index) => (
                <a
                  key={index}
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors text-sm"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                  <span>{instagram}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70">
            © 2025 WALL ARCANJO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
