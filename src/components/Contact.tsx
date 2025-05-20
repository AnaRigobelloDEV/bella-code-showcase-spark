
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (contactRef.current) {
      // Animate heading
      gsap.from(".contact-heading", {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      // Animate form
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
      
      // Animate contact info
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info-section",
          start: "top 80%",
        },
        opacity: 0,
        x: 30,
        duration: 0.8
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu contato. Retornarei em breve.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 bg-black/80">
      <div className="container mx-auto">
        <h2 className="contact-heading section-heading">Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="contact-form">
            <Card className="bg-black/50 border border-gray-800 p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white mb-1">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/60 border-gray-700 text-white focus:border-cherry"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-1">E-mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/60 border-gray-700 text-white focus:border-cherry"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white mb-1">Assunto</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/60 border-gray-700 text-white focus:border-cherry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-1">Mensagem</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-black/60 border-gray-700 text-white focus:border-cherry min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-cherry hover:bg-cherry/80 text-white px-6 py-2 w-full"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="contact-info-section">
            <Card className="contact-info bg-black/50 border border-gray-800 p-6 h-full">
              <h3 className="text-gold text-xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-cherry font-medium mb-1">Localização</h4>
                  <p className="text-white/80">São Paulo, SP - Brasil</p>
                </div>
                <div>
                  <h4 className="text-cherry font-medium mb-1">E-mail</h4>
                  <p className="text-white/80">contato@bellacode.dev</p>
                </div>
                <div>
                  <h4 className="text-cherry font-medium mb-1">Disponibilidade</h4>
                  <p className="text-white/80">Freelance & Projetos de longo prazo</p>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-gold font-medium mb-3">Vamos conversar sobre seu projeto!</h4>
                  <p className="text-white/70">
                    Estou sempre aberta para discutir novos projetos, ideias criativas ou 
                    oportunidades de fazer parte de iniciativas empolgantes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
