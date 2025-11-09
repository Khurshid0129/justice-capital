import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Users, Globe2, Lightbulb, Building2, Calculator } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Services = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Building2,
      key: 'corporate',
    },
    {
      icon: Scale,
      key: 'litigation',
    },
    {
      icon: Globe2,
      key: 'international',
    },
    {
      icon: Lightbulb,
      key: 'intellectual',
    },
    {
      icon: Users,
      key: 'real',
    },
    {
      icon: Calculator,
      key: 'tax',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
            {t('services.title')}
          </h2>
          <p className="text-xl text-secondary/80 max-w-2xl mx-auto font-sans">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className={`bg-white border-accent/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/30 flex items-center justify-center mb-6 rounded-lg group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-secondary/80 leading-relaxed font-sans">
                    {t(`services.${service.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
