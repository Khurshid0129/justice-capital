import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'We will get back to you as soon as possible.',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.info.addressText'),
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'contact@blackswan.law',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: t('contact.info.hoursText'),
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-accent/30"
      ref={ref}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-secondary/80 font-sans">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className={`bg-white shadow-lg border-accent/20 hover-lift transition-all duration-300 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div>
                  <Input
                    placeholder={t('contact.form.name')}
                    className="bg-white border-accent/30 font-sans transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.form.email')}
                    className="bg-white border-accent/30 font-sans transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder={t('contact.form.phone')}
                    className="bg-white border-accent/30 font-sans transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('contact.form.message')}
                    rows={6}
                    className="bg-white border-accent/30 font-sans transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary text-white hover:bg-secondary/90 font-sans uppercase tracking-wide transition-all duration-300 hover:scale-105"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-lg border-accent/20 hover-lift transition-all duration-300 group ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/30 flex items-center justify-center flex-shrink-0 rounded-lg transition-all duration-300 group-hover:bg-accent/50 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1 font-serif">{item.label}</h3>
                      <p className="text-secondary/80 font-sans">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
