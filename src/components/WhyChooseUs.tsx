import { Clock, Zap, Utensils, Heart } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Clock, title: "Open 24 Hours", desc: "Craving food at 3am? We've got you covered." },
  { icon: Zap, title: "Fast Service", desc: "Quick preparation and speedy delivery." },
  { icon: Utensils, title: "Variety of Meals", desc: "From pizza to jollof — something for everyone." },
  { icon: Heart, title: "Great Experience", desc: "Quality food and friendly service every time." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">Why Casa Bellini</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream">
          Why Choose Us
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-cream mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
