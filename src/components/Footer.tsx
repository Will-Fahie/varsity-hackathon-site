const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-medium text-foreground">
          Varsity Hackathon
        </p>
        <p className="text-sm text-muted-foreground">
          © 2026 Oxford vs Cambridge Varsity Hackathon
        </p>
      </div>
    </footer>
  );
};

export default Footer;
