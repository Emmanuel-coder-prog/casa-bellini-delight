import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";
import chefImg from "@/assets/gallery-chef.jpg";
import pizzaImg from "@/assets/menu-pizza.jpg";
import localImg from "@/assets/menu-local.jpg";
import drinksImg from "@/assets/menu-drinks.jpg";

const images = [
  { src: heroImg, alt: "Food spread" },
  { src: interiorImg, alt: "Restaurant interior" },
  { src: chefImg, alt: "Chef at work" },
  { src: pizzaImg, alt: "Pizza" },
  { src: localImg, alt: "Jollof rice" },
  { src: drinksImg, alt: "Drinks" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2">Gallery</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream">
          A Taste of Casa Bellini
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden rounded-xl aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
