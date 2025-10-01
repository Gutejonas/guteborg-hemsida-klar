import { Crown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-8 p-6 rounded-full bg-primary/10 animate-pulse">
          <Crown className="w-20 h-20 text-primary" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
          Guteborg Sverige AB
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Professionella tjänster inom fastigheter, konsulttjänster och kultur
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("vad-vi-gor")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Våra tjänster
          </button>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all transform hover:scale-105"
          >
            Kontakta oss
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
