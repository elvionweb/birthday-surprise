import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  return (
    <section className="min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-primary via-secondary to-accent">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-white"
      >
        A Special Birthday Surprise
      </motion.h1>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={onStart}
        className="mt-4 sm:mt-3 md:mt-8 px-6 py-4 bg-white text-primary font-semibold rounded-full shadow-lg"
      >
        Start the Journey
      </motion.button>
    </section>
  );
}
