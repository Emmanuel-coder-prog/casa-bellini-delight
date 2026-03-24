import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/233000000000?text=Hi%20Casa%20Bellini!%20I'd%20like%20to%20place%20an%20order.";

const steps = [
  { num: "1", label: "Choose your meal" },
  { num: "2", label: "Send order on WhatsApp" },
  { num: "3", label: "Fast delivery or pickup" },
];

const OrderSection = () => (
  <section id="order" className="py-20 bg-background">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">How to Order</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-4">
          Order in Seconds
        </h2>
        <p className="text-muted-foreground mb-10">
          It's super easy — just 3 simple steps.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl bg-secondary border border-border"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold">
              {s.num}
            </div>
            <p className="text-cream font-semibold">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Button variant="whatsapp" size="xl" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a href="tel:+233000000000">
            <Phone className="w-4 h-4" />
            Call: +233 00 000 0000
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default OrderSection;
