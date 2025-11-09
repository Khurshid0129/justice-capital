import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen relative overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Левая часть с текстом */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center px-6 py-20 lg:py-0">
        <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-20">
          {/* Mobile: show image inside the content area (hidden on lg and up) */}
          <div className="mb-6 lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Office building"
              className="w-full rounded-md object-cover shadow-elegant"
            />
          </div>

          <div className="mb-6 animate-fade-in-down hidden lg:block">
            <span className="text-white font-semibold font-sans text-sm tracking-[0.2em] uppercase bg-white/10 px-4 py-2 rounded-full">
              25+ {t('hero.experience')}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight font-serif animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {t('hero.title')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-12 leading-relaxed font-sans font-light animate-fade-in-up max-w-lg" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {t('hero.subtitle')}
          </p>
          
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-base px-8 py-4 group animate-scale-in hover-lift font-medium"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Правая часть с изображением */}
      {/* Right-side decorative/background image: shown on lg and up, hidden on small screens */}
      <div className="hidden lg:block w-full lg:w-1/2 min-h-[50vh] lg:min-h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>
    </section>
  );
};
