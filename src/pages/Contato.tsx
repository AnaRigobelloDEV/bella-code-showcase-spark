import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/tattoo/Footer';

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
    <div className="pt-20 bg-[#E9E8D4] min-h-screen">
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
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre sua ideia de tatuagem, interesse em cursos ou qualquer dúvida..."
                ></Textarea>
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
      <Footer />
    </div>
  );
};

export default Contato;
