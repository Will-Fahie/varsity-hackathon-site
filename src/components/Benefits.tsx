import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Utensils, Users } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Cash Prizes",
    description: "Significant rewards for top teams in each track.",
  },
  {
    icon: Utensils,
    title: "Unlimited Food",
    description: "Gourmet catering throughout the day to fuel your code.",
  },
  {
    icon: Users,
    title: "Top Judges",
    description: "Feedback from engineering leaders at top tech firms.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            What You Get
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
