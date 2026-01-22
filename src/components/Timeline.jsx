import { motion } from "framer-motion";

const timeline = [
  {
    year: "Elvis",
    title: "Born To Rise, Not To Bow.",
    description: "On April 25, a soul marked by purpose was born, wrapped in the love of God. Elvis entered life carrying heaven's gentle touch a life formed in divine love, unafraid of becoming more. He has grown into a man who moves with strength, sharpened by learning, shaped by challenge and refined by intention. Elvis walks boldly into the unknown. His life reflects courage, adventure and becoming proof that when God creates with vision, purpose, and grace.",
  },
  {
    year: "2015",
    title: "The awakening and the hustle.",
    description: "Became aware of the weight of his dreams, the reach of his vision, and the responsibility of his potential. From that moment, chasing greatness stopped being a thought and became a commitment. He chose to learn more, to unlearn and to relearn understanding that growth demands humility, patience and consistency. Every disciplined action moved the vision closer to reality. He didn't wait for perfect conditions, he built through imperfect ones. Day by day, habit by habit, he learned that big dreams are not achieved by luck but by sustained effort, faith and self mastery. He knew that greatness is not imagined it is earned.",
  },
  {
    year: "Guided by God's Purpose",
    title: "Stronger, wiser, unstoppable.",
    description: "Every challenge he faced, every lesson he learned, has forged him into someone unstoppable. Yes he bends, he adapts, he endures but he never surrenders. When you doubt him, he won't just prove you wrong, he will make you remember forever that he doesn't fight for victory he dominate and leave a legacy his scars are proof that he has been tested. He is gentle, intentional, and unshakable. A king and so much more.",
  },
  {
    year: "Celebrating You. Keep Leaving Your Mark",
    title: "Happy birthday, Elvis. Keep Shining.",
    description: "Today we celebrate more than a birthdat we celebrate a life forged with purpose, strength and relentless ambition. A wonderful soul who learns, grows and conquers without fear. May this year bring even greater clarity, unshakable faith, and victories that reflect your discipline, courage, and vision. May God continue to guide your steps, sharpen your mind, and fuel your dreams. May every small step you take carry powerful meaning, every risk you embrace turn into growth, and every challenge you face strengthen your legacy.",
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
