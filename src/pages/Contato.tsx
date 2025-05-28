
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const artists = [
    "@wall_tattoo", "@sergio_lima_tattoo", "@paty_color_tattoo",
    "@diego_traditional", "@marina_micro", "@rafael_dark_art",
    "@luana_geometric", "@carlos_tribal", "@ana_script"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode implementar o envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para fazer sua próxima tatuagem ou se inscrever em nossos cursos? 
            Entre em contato conosco e vamos transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 mb-2 block">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 mb-2 block">Mensagem</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre sua ideia de tatuagem, interesse em cursos ou qualquer dúvida..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Artes, 123 - Centro<br />
                      São Paulo, SP - CEP 01234-567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda à Sexta: 10h às 20h<br />
                      Sábado: 9h às 18h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Nossa Localização</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Mapa da localização</p>
                  <p className="text-sm">(Placeholder para integração com Google Maps)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer with Instagram Links */}
      <footer className="mt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/6c90fed9-fe15-42f4-bdb2-32d5a7f26e8d.png"
                alt="WALLARCANJO Logo"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                Transformando ideias em arte desde 2010. 
                O estúdio que une tradição e inovação na arte da tatuagem.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>Rua das Artes, 123 - Centro</p>
                <p>São Paulo, SP - CEP 01234-567</p>
                <p>(11) 9999-9999</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Siga Nossos Artistas</h3>
              <div className="grid grid-cols-3 gap-2">
                {artists.map((artist, index) => (
                  <a
                    key={index}
                    href={`https://instagram.com/${artist.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    <Instagram size={14} />
                    <span className="truncate">{artist}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WALLARCANJO Tattoo & Academy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contato;
