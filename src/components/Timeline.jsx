import { motion } from "framer-motion";

const timeline = [
  {
    year: "April 25",
    title: "Born To Rise, Not To Bow.",
    description:
      "A soul marked by purpose was born, wrapped in the love of God. Entered life carrying heaven's gentle touch a life formed in divine love, unafraid of becoming more.",
  },
  {
    year: "Guided by God's Purpose",
    title: "Knew him in 2015.",
    description:
      "Every challenge he faced, every lesson he learned, has forged him into someone unstoppable. Yes he bends, he adapts, he endures but he never surrenders. When you doubt him, he won't just prove you wrong, he will make you remember forever that he doesn't fight for victory he dominate and leave a legacy and his scars are proof that he has been tested. He is gentle, intentional, and unshakable. A king and so much more.",
  },
  {
    year: "Awakening",
    title: "The hustle.",
    description:
      "He became aware of the weight of his dreams and the responsibility of his potential. From that moment, chasing greatness stopped being a thought and became a commitment. He chose to learn more, to unlearn and to relearn understanding that growth demands humility, patience and consistency. He learned that big dreams are not achieved by luck but by sustained effort, faith and self mastery.",
  },
  {
    year: "Celebrating You. Keep Leaving Your Mark",
    title: "Happy birthday, Elvis.",
    description:
      "Today we celebrate more than a birthday we celebrate a life forged with purpose, strength and relentless ambition. A wonderful soul who learns, grows and conquers without fear. May this year bring even greater clarity, unshakable faith, and victories that reflect your discipline, courage, and vision. .",
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8 pb-3 md:pb-5 px-2 md:px-4">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-white mb-2">
        Evolving Journey in God's Love
      </h2>

      <div className="max-w-5xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-1 sm:mb-3 md:mb-4 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-3">
              <div className="bg-gradient-to-br from-blue-600 to-secondary text-white rounded-xl p-3 shadow-lg">
                <span className="text-sm opacity-80">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="md:w-1/2 hidden md:flex items-center justify-center">
              <span className="w-4 h-4 bg-primary rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
