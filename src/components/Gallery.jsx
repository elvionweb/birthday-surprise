import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import memory1 from "../assets/memory1.jpeg";
import memory2 from "../assets/memory2.jpeg";
import Seh from "../assets/Seh.jpeg";
import memory3 from "../assets/Memory3.jpeg";

// Add captions to each image
const images = [
  { src: memory1, caption: "The first birthday 🎉", style: "text-pink-400" },
  { src: memory2, caption: "Funny moments 😂", style: "text-green-400" },
  { src: Seh, caption: "Family love ❤️", style: "text-blue-400" },
  { src: memory3, caption: "Celebration vibes 🥳", style: "text-yellow-400" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-5 pt-6 sm:py-4 md:py-14 overflow-hidden px-4 bg-blue-600">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-3 md:mb-12 text-white">
        Memories We Love
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected.src}
              alt={selected.caption}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[70%] max-w-[90%] rounded-xl shadow-lg cursor-auto mb-4"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`text-center ${
                selected.style || "text-white text-center text-lg sm:text-xl"
              }`}
            >
              {selected.caption}
            </motion.p>

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
