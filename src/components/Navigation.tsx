import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Guteborg
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("om-oss")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection("vad-vi-gor")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.nav.contact}
          </button>
          <LanguageSwitcher className="ml-2 border-l border-border pl-4" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("om-oss")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("vad-vi-gor")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
