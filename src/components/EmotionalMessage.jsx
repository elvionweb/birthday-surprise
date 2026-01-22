import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";

const message =`
2Today is not just another day.
It is a reminder that heaven smiled, and God said,
Let her live. Let her grow. Let her shine.

Happy Birthday

As you read these words, pause for a moment…
Breathe.
Smile.
And remember how far God has brought you.

Every year of your life is a testimony.
Every breath you take is evidence that God is not done with you yet.

You have walked through days of laughter,
and days where tears spoke louder than words.
You have known strength,
and moments where only God held you together.

Yet here you are.
Alive.
Growing.
Becoming.

This new year is not empty.
It is filled with purpose, grace, favor, and quiet miracles waiting to unfold.
God has gone ahead of you to prepare peace where you least expect it,
strength for every challenge,
and joy that will surprise your heart.

May this year reward your patience.
May it heal what you never spoke about.
May it answer prayers you whispered in faith.
May it remind you that your life matters deeply.

You are loved.
You are seen.
You are protected.
And your story is still unfolding beautifully.

So today, lift your heart in gratitude.
Thank God for life.
Thank Him for another chapter.
Thank Him for you.

Happy Birthday
This year will be kind to you
`;

export default function EmotionalMessage() {
  const { displayedText, isTyping } = useTypewriter(message, 85, 5000);
  // const typedText = useTypewriter(message, 50, 3000); // slower = deeper emotion

  return (
    <section className="min-h-screen overflow-hidden flex items-center justify-center px-4 bg-gradient-to-b from-black via-black to-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl pt-8 sm:text-4xl font-semibold text-white mb-4">
          A Message For You
        </h2>

        <p className="text-base sm:text-lg leading-snug text-gray-200 whitespace-pre-line">
          {displayedText}
          {isTyping && <span className="animate-pulse">▍</span>}
        </p>
      </motion.div>
    </section>
  );
}
