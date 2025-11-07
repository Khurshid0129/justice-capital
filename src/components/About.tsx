import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';

export const About = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '500+', label: t('about.stats.clients') },
    { value: '1200+', label: t('about.stats.cases') },
    { value: '50+', label: t('about.stats.attorneys') },
    { value: '25+', label: t('about.stats.countries') },
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary mb-8 font-sans font-light">{t('about.subtitle')}</p>
          </div>

          <div className="space-y-8 mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              {t('about.description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              {t('about.mission')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
