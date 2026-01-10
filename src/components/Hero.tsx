import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-3 mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground">
            March 7th, 2026
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground">
            London
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-foreground mb-8"
        >
          Cambridge{" "}
          <span className="italic text-muted-foreground font-normal">v.</span>{" "}
          Oxford
          <br />
          <span className="text-primary">Varsity Hackathon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          One day. Two universities. Two tracks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button size="lg" className="group" asChild>
            <a href="mailto:varsityhackathon.co.uk">
              Chat with our team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
