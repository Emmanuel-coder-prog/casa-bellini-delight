import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import pizzaImg from "@/assets/menu-pizza.jpg";
import localImg from "@/assets/menu-local.jpg";
import sandwichImg from "@/assets/menu-sandwich.jpg";
import icecreamImg from "@/assets/menu-icecream.jpg";
import drinksImg from "@/assets/menu-drinks.jpg";

const WHATSAPP_URL = "https://wa.me/233000000000?text=Hi%20Casa%20Bellini!%20I'd%20like%20to%20place%20an%20order.";

const categories = [
  { name: "Pizza", desc: "Wood-fired goodness with premium toppings", img: pizzaImg },
  { name: "Local Dishes", desc: "Authentic Ghanaian flavors — Jollof, Banku & more", img: localImg },
  { name: "Sandwiches", desc: "Fresh, loaded, and made to order", img: sandwichImg },
  { name: "Ice Cream & Desserts", desc: "Sweet treats to cool you down", img: icecreamImg },
  { name: "Drinks", desc: "Fresh juices, smoothies & cocktails", img: drinksImg },
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">Our Menu</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream">
          Something for Everyone
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-cream mb-1">{cat.name}</h3>
              <p className="text-muted-foreground text-sm">{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            View Full Menu on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default MenuSection;
