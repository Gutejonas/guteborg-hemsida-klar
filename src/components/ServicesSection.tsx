import { Building2, Users, Heart } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Fastigheter",
    subtitle: "Utbud",
    description: "Vi erbjuder ett brett utbud av fastighetstjänster, från förvaltning till utveckling och rådgivning inom fastighetssektorn.",
  },
  {
    icon: Users,
    title: "Konsult",
    subtitle: "Våra tjänster",
    description: "Professionella konsulttjänster anpassade efter era behov. Vi hjälper er att nå era mål genom strategisk rådgivning och praktiskt stöd.",
  },
  {
    icon: Heart,
    title: "Kultur",
    subtitle: "Värdegrunden",
    description: "Kultur och värderingar är kärnan i vår verksamhet. Vi stödjer kulturella initiativ och arbetar för att skapa värde för samhället.",
  },
];

const ServicesSection = () => {
  return (
    <section id="vad-vi-gor" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Vad vi gör
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Tre kärnområden där vi levererar professionella lösningar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-border"
              >
                <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {service.title}
                </h3>
                
                <p className="text-sm text-primary/70 mb-4 font-medium">
                  {service.subtitle}
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
