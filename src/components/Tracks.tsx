import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Gamepad2 } from "lucide-react";

const tracks = [
  {
    icon: Shield,
    title: "AI Security",
    description:
      "Build robust solutions to help safely deploy AI systems. Focus on prompt injection defense, model robustness, or secure inference.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Build next-gen tools for eSports fans, athletes, or game companies. Create engines, analytics, or immersive experiences.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const Tracks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            The Tracks
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Two distinct challenges designed to test your limits in specialized fields.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className={`relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${track.gradient} border border-border overflow-hidden`}
            >
              <div className={`w-14 h-14 rounded-2xl ${track.iconBg} flex items-center justify-center mb-6`}>
                <track.icon className={`w-7 h-7 ${track.iconColor}`} />
              </div>
              <h3 className="font-display text-3xl font-medium text-foreground mb-4">
                {track.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
