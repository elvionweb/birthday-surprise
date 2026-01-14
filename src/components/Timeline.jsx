import { motion } from "framer-motion";

const timeline = [
  {
    year: "2001",
    title: "Born a Star 🌟",
    description: "In 2001, something truly beautiful happened. A remarkable soul came into the world, full of promise. Serah was born a star, and with every year, she has grown through laughter, tears, strength, and faith. Her life is living proof that God creates with purpose, intention and grace.",
  },
  {
    year: "2015",
    title: "Big Dreams",
    description: "Learning through small steps that carried powerful meaning, growing, and chasing greatness.",
  },
  {
    year: "2023",
    title: "Stronger, wiser, unstoppable.",
    description: "This year marks a new chapter in your extraordinary journey. Every challenge you faced, every lesson you learned, has shaped you into someone unstoppable. You've grown stronger in your convictions, wiser in your choices, and braver in pursuing what sets your soul on fire.",
  },
  {
    year: "Today",
    title: "Happy Birthday 🎂",
    description: "Serah, today we celebrate you—your strength, your courage, your unstoppable spirit. Every step you've taken, every challenge you've faced, has made you the incredible soul you are. Shine bright, feel loved, and never forget how extraordinary, unique, and powerful you truly are.",
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden pt-8 pb-3 px-4 bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
        Your Beautiful Journey 💖
      </h2>

      <div className="max-w-5xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-2 sm:mb-3 md:mb-4 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-3">
              <div className="bg-gradient-to-br from-blue-600 to-secondary text-white rounded-xl p-4 shadow-lg">
                <span className="text-sm opacity-80">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">
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
