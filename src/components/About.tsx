import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const stats = [
    { value: '500+', label: t('about.stats.clients') },
    { value: '1200+', label: t('about.stats.cases') },
    { value: '50+', label: t('about.stats.attorneys') },
    { value: '25+', label: t('about.stats.countries') },
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-secondary"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80')",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              {t('about.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 font-sans">{t('about.subtitle')}</p>
          </div>

          <div className={`space-y-8 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-lg text-white/85 leading-relaxed font-sans">
              {t('about.description')}
            </p>
            <p className="text-lg text-white/85 leading-relaxed font-sans">
              {t('about.mission')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover-lift transition-all duration-300 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="text-4xl font-bold text-white mb-2 font-serif">{stat.value}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
