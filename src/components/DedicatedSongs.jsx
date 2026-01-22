import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

import ChristinaPerri from "../assets/christina_perri_-_thousand_years_(mp3.pm).mp3";
import BrrunoMars from "../assets/Bruno_Mars_-_Just_the_Way_You_Are_2010_(mp3.pm).mp3";
import EddSheeran from "../assets/Edd_Sheeran_-_Perfect_(mp3.pm).mp3";

const songs = [
  {
    title: "Song of Peace",
    note: "This one reminds me of your calm and beautiful heart.",
    src: ChristinaPerri,
  },
  {
    title: "Your Smile",
    note: "Whenever this plays, I think of your smile.",
    src: BrrunoMars,
  },
  {
    title: "Forever Loved",
    note: "A reminder that you are deeply loved today and always.",
    src: EddSheeran,
  },
];

// Background color gradients
const bgColors = [
  "from-black via-gray-900 to-black",           // dark
  "from-blue-900 via-blue-700 to-blue-900",     // blue
  "from-yellow-500 via-yellow-400 to-yellow-500", // yellow
  "from-lime-600 via-lime-500 to-lime-600",    // lime green
  "from-violet-700 via-purple-600 to-violet-700", // violet
  "from-pink-700 via-pink-600 to-pink-700",    // pink
  "from-cyan-600 via-cyan-500 to-cyan-600",    // cyan
  "from-teal-600 via-teal-500 to-teal-600",    // teal
   "from-yellow-500 via-yellow-400 to-yellow-500", // yellow
   "from-lime-600 via-lime-500 to-lime-600",    // lime green
  "from-blue-900 via-blue-700 to-blue-900",     // blue
];

export default function DedicatedSongs() {
  const [current, setCurrent] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

  const playSong = (index) => {
    // Stop any currently playing song
    if (current?.howl) {
      current.howl.stop();
    }

    const howl = new Howl({
      src: [songs[index].src],
      volume: 0.7,
    });

    howl.play();
    setCurrent({ index, howl });
  };

  const stopSong = () => {
    if (current?.howl) {
      current.howl.stop();
      setCurrent(null);
    }
  };

  // Animate background color while music is playing
  useEffect(() => {
    if (!current) {
      setBgIndex(0); // reset to dark when no music
      return;
    }

    const interval = setInterval(() => {
      setBgIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * bgColors.length);
        } while (next === prev);
        return next;
      });
    }, 3000); // change every 6 seconds

    return () => clearInterval(interval);
  }, [current]);

  return (
    <motion.section
      className={`py-8 px-4 bg-gradient-to-b ${bgColors[bgIndex]} text-white transition-colors duration-[4000ms]`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Songs Just For You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base opacity-80 mb-8"
        >
          These songs were chosen with love play them and feel how special you are
        </motion.p>

        {/* Songs List */}
        <div className="space-y-6">
          {songs.map((song, index) => {
            const isPlaying = current?.index === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4
                  ${isPlaying ? "bg-primary/20" : "bg-blue-700/60"} backdrop-blur-md`}
              >
                {/* Song Info */}
                <div className="text-left flex-1">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FaHeart className="text-primary" />
                    {song.title}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">
                    {song.note}
                  </p>
                </div>

                {/* Play / Pause */}
                <button
                  onClick={() => (isPlaying ? stopSong() : playSong(index))}
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${isPlaying ? "bg-primary shadow-lg shadow-pink-500/40 animate-pulse" : "bg-primary"}
                    hover:scale-110 transition-transform`}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
