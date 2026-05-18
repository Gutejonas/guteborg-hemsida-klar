import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t.contact.title}
          </h2>
          <p className="text-lg text-foreground/80">
            {t.contact.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:guteborgab@gmail.com"
            className="flex items-start gap-4 p-6 rounded-lg bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-105 border border-border group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-primary mb-1">{t.contact.email}</h3>
              <p className="text-foreground/80">guteborgab@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:0725209096"
            className="flex items-start gap-4 p-6 rounded-lg bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-105 border border-border group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-primary mb-1">{t.contact.phone}</h3>
              <p className="text-foreground/80">0725 20 90 96</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/guteborg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-lg bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-105 border border-border group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-primary mb-1">{t.contact.linkedin}</h3>
              <p className="text-foreground/80">{t.contact.linkedinValue}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-primary mb-1">{t.contact.location}</h3>
              <p className="text-foreground/80">{t.contact.locationValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
