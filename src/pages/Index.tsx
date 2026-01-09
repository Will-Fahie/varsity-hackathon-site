import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Tracks from "@/components/Tracks";
import EventDetails from "@/components/EventDetails";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Tracks />
        <EventDetails />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
