import logo from "@/assets/guteborg-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-8">
          <img src={logo} alt={t.hero.logoAlt} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
          {t.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("vad-vi-gor")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.hero.ctaServices}
          </button>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all transform hover:scale-105"
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
