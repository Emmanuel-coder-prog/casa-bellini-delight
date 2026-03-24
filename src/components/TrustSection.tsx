import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Akua M.", text: "Best jollof in Accra! I order every weekend. Fast delivery too." },
  { name: "Kwame D.", text: "Their pizza is incredible — and open 24 hours is a lifesaver!" },
  { name: "Ama S.", text: "The ice cream and sandwiches are top tier. My kids love it!" },
];

const TrustSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <Star className="w-5 h-5 text-primary fill-primary/40" />
        </div>
        <p className="text-2xl font-display font-semibold text-cream">4.1 on Google</p>
        <p className="text-muted-foreground mt-2">Loved by hundreds of customers in Accra</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <p className="text-foreground mb-4 italic">"{t.text}"</p>
            <p className="text-primary font-semibold text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
