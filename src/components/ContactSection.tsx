import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">Find Us</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream">
          Location & Contact
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border h-80 lg:h-full min-h-[300px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.73663498945!2d-0.2631340546875!3d5.603716999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Casa Bellini location on Google Maps"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-1">Address</h3>
              <p className="text-muted-foreground">Accra, Ghana</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-1">Phone</h3>
              <a href="tel:+233000000000" className="text-muted-foreground hover:text-primary transition-colors">
                +233 00 000 0000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-1">Opening Hours</h3>
              <p className="text-muted-foreground">Open 24 Hours — 7 Days a Week</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
