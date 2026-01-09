import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-card border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            The Talent
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We are seeking the absolute top talent in computer science and software engineering. 
            This is an exclusive event for the best builders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="font-display text-8xl md:text-9xl font-medium text-primary mb-2">
              15
            </div>
            <p className="text-lg text-muted-foreground">From Oxford</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="font-display text-8xl md:text-9xl font-medium text-accent mb-2">
              15
            </div>
            <p className="text-lg text-muted-foreground">From Cambridge</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
