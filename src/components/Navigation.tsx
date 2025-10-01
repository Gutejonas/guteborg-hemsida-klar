import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("om-oss")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Om oss
          </button>
          <button
            onClick={() => scrollToSection("vad-vi-gor")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Vad vi gör
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Kontakt
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("om-oss")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Om oss
            </button>
            <button
              onClick={() => scrollToSection("vad-vi-gor")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Vad vi gör
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
