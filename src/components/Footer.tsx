const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/70">
          © {new Date().getFullYear()} Guteborg Sverige AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
