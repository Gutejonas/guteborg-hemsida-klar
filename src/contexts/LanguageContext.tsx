import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sv" | "en";

type Translations = {
  nav: { about: string; services: string; contact: string };
  hero: {
    title: string;
    subtitle: string;
    ctaServices: string;
    ctaContact: string;
    logoAlt: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinValue: string;
    location: string;
    locationValue: string;
  };
  footer: { rights: string };
};

const translations: Record<Language, Translations> = {
  sv: {
    nav: { about: "Om oss", services: "Vad vi gör", contact: "Kontakt" },
    hero: {
      title: "Guteborg Sverige AB",
      subtitle: "Professionella konsulttjänster med fokus på strategi, ledarskap och affärsutveckling",
      ctaServices: "Våra tjänster",
      ctaContact: "Kontakta oss",
      logoAlt: "Guteborg Sverige AB logotyp",
    },
    about: {
      title: "Om oss",
      p1: "Guteborg Sverige AB stödjer organisationer i att åstadkomma verklig och varaktig förändring i teknikdrivna och kunskapsintensiva miljöer. Vår kärnkompetens är ledarskap i komplexitet – där strategi, teknik, organisation och människor måste röra sig tillsammans för att resultat ska kunna förverkligas.",
      p2: "Bolaget leds av Jonas Lindblom, en internationellt erfaren ledare och förändringsagent med bakgrund från globala organisationer inom telekom, fintech, fordonsindustri och digital handel.",
      p3: "Vi kombinerar djup branschkunskap med ett personligt engagemang för att leverera värdeskapande lösningar till våra kunder.",
      p4: "Vår filosofi bygger på långsiktiga relationer, professionalism och en stark värdegrund. Vi strävar efter att skapa mervärde i varje uppdrag vi tar oss an.",
      p5: "Med en kombination av erfarenhet, expertis och passion arbetar vi för att vara en pålitlig partner för både privata och offentliga aktörer.",
    },
    services: {
      title: "Vad vi gör",
      intro: "Konsulttjänster anpassade efter era behov",
      items: [
        { title: "Strategi & Rådgivning", subtitle: "Riktning och beslut", description: "Vi hjälper er att forma strategier, fatta välgrundade beslut och navigera komplexa utmaningar med tydlighet." },
        { title: "Ledarskap & Organisation", subtitle: "Människor och struktur", description: "Stöd inom ledarskapsutveckling, organisationsdesign och förändringsarbete för hållbar tillväxt." },
        { title: "Affärsutveckling", subtitle: "Tillväxt och resultat", description: "Praktiskt stöd för att utveckla affären, identifiera nya möjligheter och förbättra resultat över tid." },
      ],
    },
    contact: {
      title: "Kontakta oss",
      intro: "Vi ser fram emot att höra från dig",
      email: "E-post",
      phone: "Telefon",
      linkedin: "LinkedIn",
      linkedinValue: "Guteborg Sverige AB",
      location: "Plats",
      locationValue: "Sverige",
    },
    footer: { rights: "Alla rättigheter förbehållna." },
  },
  en: {
    nav: { about: "About", services: "What we do", contact: "Contact" },
    hero: {
      title: "Guteborg Sverige AB",
      subtitle: "Professional consulting services focused on strategy, leadership and business development",
      ctaServices: "Our services",
      ctaContact: "Contact us",
      logoAlt: "Guteborg Sverige AB logo",
    },
    about: {
      title: "About us",
      p1: "Guteborg Sverige AB supports organizations in delivering real, lasting change in technology-driven and knowledge-intensive environments. Our core capability is leadership in complexity—where strategy, technology, organization, and people must move together for results to materialize.",
      p2: "The company is led by Jonas Lindblom, an internationally experienced leader and change agent with a background from global organizations within telecom, fintech, automotive, and digital commerce.",
      p3: "We combine deep industry knowledge with personal commitment to deliver value-creating solutions to our clients.",
      p4: "Our philosophy is built on long-term relationships, professionalism and a strong set of values. We strive to create added value in every engagement we take on.",
      p5: "With a combination of experience, expertise and passion, we work to be a trusted partner for both private and public clients.",
    },
    services: {
      title: "What we do",
      intro: "Consulting services tailored to your needs",
      items: [
        { title: "Strategy & Advisory", subtitle: "Direction and decisions", description: "We help you shape strategy, make well-grounded decisions and navigate complex challenges with clarity." },
        { title: "Leadership & Organisation", subtitle: "People and structure", description: "Support across leadership development, organisational design and change management for sustainable growth." },
        { title: "Business Development", subtitle: "Growth and results", description: "Hands-on support to develop the business, identify new opportunities and improve results over time." },
      ],
    },
    contact: {
      title: "Contact us",
      intro: "We look forward to hearing from you",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      linkedinValue: "Guteborg Sverige AB",
      location: "Location",
      locationValue: "Sweden",
    },
    footer: { rights: "All rights reserved." },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "sv";
    const stored = window.localStorage.getItem("guteborg-lang");
    return stored === "en" ? "en" : "sv";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("guteborg-lang", lang);
      document.documentElement.lang = lang;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
