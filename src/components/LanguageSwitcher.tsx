import { useLanguage, Language } from "@/contexts/LanguageContext";

const flags: Record<Language, { label: string; emoji: string; aria: string }> = {
  sv: { label: "SV", emoji: "🇸🇪", aria: "Byt till svenska" },
  en: { label: "EN", emoji: "🇬🇧", aria: "Switch to English" },
};

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {(Object.keys(flags) as Language[]).map((lang) => {
        const active = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-label={flags[lang].aria}
            aria-pressed={active}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-all ${
              active
                ? "bg-primary/15 text-primary"
                : "text-foreground/70 hover:text-primary hover:bg-primary/10"
            }`}
          >
            <span className="text-base leading-none" aria-hidden="true">{flags[lang].emoji}</span>
            <span className="font-medium">{flags[lang].label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
