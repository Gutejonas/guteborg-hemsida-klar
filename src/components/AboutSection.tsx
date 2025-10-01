const AboutSection = () => {
  return (
    <section id="om-oss" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Om oss
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Guteborg Sverige AB är ett etablerat företag som verkar inom tre huvudområden: 
              fastigheter, konsulttjänster och kultur. Vi kombinerar djup branschkunskap med 
              ett personligt engagemang för att leverera högkvalitativa lösningar till våra kunder.
            </p>
            
            <p>
              Vår filosofi bygger på långsiktiga relationer, professionalism och en stark värdegrund. 
              Vi strävar efter att skapa mervärde i varje projekt vi är involverade i, oavsett om det 
              handlar om fastighetsutveckling, konsultstöd eller kulturella initiativ.
            </p>
            
            <p>
              Med en kombination av erfarenhet, expertis och passion arbetar vi för att vara en 
              pålitlig partner för både privata och offentliga aktörer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
