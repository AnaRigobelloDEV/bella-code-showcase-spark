
import { Instagram, Github, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-gold text-2xl font-bold">
              BELLA<span className="text-cherry">CODE</span>
            </h2>
            <p className="text-white/70 mt-2">Transformando ideias em código</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511999999999"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            
            <p className="text-white/50 text-sm">
              &copy; {year} BELLA CODE. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
