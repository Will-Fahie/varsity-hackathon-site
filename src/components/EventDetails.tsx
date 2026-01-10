import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start gap-6 md:gap-8 lg:gap-16"
        >
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-base text-muted-foreground">Date</p>
              <p className="font-display text-xl md:text-2xl font-medium text-foreground">March 7th, 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-base text-muted-foreground">Duration</p>
              <p className="font-display text-xl md:text-2xl font-medium text-foreground">All Day Event</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-base text-muted-foreground">Location</p>
              <p className="font-display text-xl md:text-2xl font-medium text-foreground">London, Central Venue TBD</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
