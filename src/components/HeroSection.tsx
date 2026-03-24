import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";

const WHATSAPP_URL = "https://wa.me/233000000000?text=Hi%20Casa%20Bellini!%20I'd%20like%20to%20place%20an%20order.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Delicious spread of food at Casa Bellini"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

    <div className="relative z-10 container text-center px-4 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4"
      >
        Welcome to Casa Bellini
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
      >
        Delicious Meals Anytime
        <br />
        <span className="text-primary">— Open 24 Hours</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
      >
        Pizza, local dishes, and more. Order now and enjoy fast service.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="whatsapp" size="xl" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            🟢 Order Now on WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <a href="#menu">View Menu</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
