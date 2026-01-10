import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          {!isMainPage && (
            <img 
              src="/logo.png" 
              alt="Varsity Hackathon Logo" 
              className="h-8 w-auto"
            />
          )}
          <span className="font-display text-xl font-semibold text-foreground">
            Varsity Hackathon
          </span>
        </a>
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:varsityhackathon.co.uk">Get in touch</a>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
