import { useState, useCallback } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import applauseCheer from "../assets/applause-cheer-236786.mp3";
import happyBirthday from "../assets/happy-birthday-254480.mp3";
import Birthday from "../assets/Birthday.jpeg";
import { div } from "framer-motion/client";

const clap = new Howl({ src: [applauseCheer], volume: 1 });
const birthdayTune = new Howl({ src: [happyBirthday], volume: 0.6 });

export default function MakeWish({ onFocus }) {
  const [clicked, setClicked] = useState(false);

  // Fireworks initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleWish = () => {
    setClicked(true);
    clap.play();
    birthdayTune.play();
    if (onFocus) onFocus(); // optional callback to blur timeline/gallery
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      {/* Background Image if clicked */}
      {clicked && (
        <> 
        <img
          src={Birthday}
          alt="Birthday Celebration"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50 z-0" />
        </>
      )}

      {/* Fireworks Confetti */}
      {clicked && (
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: true, zIndex: 1 },
            particles: {
              number: { value: 0 },
              color: { value: ["#ff5ea8", "#ffd166", "#7c5cff"] },
              shape: { type: "circle" },
              opacity: { value: 0.8 },
              size: { value: { min: 3, max: 6 } },
              move: {
                enable: true,
                speed: 10,
                direction: "none",
                outModes: "destroy",
              },
            },
            emitters: {
              direction: "top",
              rate: { delay: 0.1, quantity: 8 },
              size: { width: 0, height: 0 },
            },
          }}
        />
      )}

      {/* Button or Birthday Message */}
      {!clicked ? (
        <button
          onClick={handleWish}
          className="px-10 py-5 bg-primary rounded-full text-xl shadow-lg hover:scale-105 transition-transform z-10 relative"
        >
          🎂 Make a Wish 🎂
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center max-w-3xl px-4"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4"> Happy Birthday! </h1>
          <p className="text-xl sm:text-2xl text-center leading-relaxed">
            Today we celebrate everything about you, your strength, and the story God is writing in your life. Every step, every challenge, every quiet moment you never told anyone but God. You are not just living you are growing, shining, and leaving a mark only you can leave. May all your dreams come true and your day be magical! 💖
          </p>
        </motion.div>
      )}
    </section>
  );
}

















// import { useState, useCallback, useRef } from "react";
// import { Howl } from "howler";
// import { motion } from "framer-motion";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import applauseCheer from "../assets/applause-cheer-236786.mp3";
// import happyBirthday from "../assets/happy-birthday-254480.mp3";
// import Birthday from "../assets/Birthday.jpeg";

// const clap = new Howl({
//   src: [applauseCheer],
//   volume: 1,
//   loop: false, // 🔒 ensure no looping
// });

// const birthdayTune = new Howl({
//   src: [happyBirthday],
//   volume: 0.6,
//   loop: false,
// });

// export default function MakeWish({ onFocus }) {
//   const [clicked, setClicked] = useState(false);
//   const applausePlayedRef = useRef(false); // 🔒 absolute lock

//   // Fireworks initialization
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const handleWish = () => {
//     if (clicked) return; // 🔒 prevent re-trigger

//     setClicked(true);

//     // ✅ PLAY APPLAUSE ONCE ONLY
//     if (!applausePlayedRef.current) {
//       applausePlayedRef.current = true;
//       clap.play();

//       // ⛔ FORCE STOP AFTER 4 SECONDS (key fix)
//       setTimeout(() => {
//         clap.stop();
//       }, 4000);
//     }

//     // 🎶 Birthday music (allowed to continue)
//     birthdayTune.play();

//     if (onFocus) onFocus();
//   };

//   return (
//     <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black text-white px-4">
      
//       {/* Background Image */}
//       {clicked && (
//         <>
//           <img
//             src={Birthday}
//             alt="Birthday Celebration"
//             className="absolute inset-0 w-full h-full object-cover z-0"
//           />
//           <div className="absolute inset-0 bg-black/50 z-0" />
//         </>
//       )}

//       {/* Fireworks */}
//       {clicked && (
//         <Particles
//           init={particlesInit}
//           options={{
//             fullScreen: { enable: true, zIndex: 1 },
//             particles: {
//               number: { value: 0 },
//               color: { value: ["#ff5ea8", "#ffd166", "#7c5cff"] },
//               shape: { type: "circle" },
//               opacity: { value: 0.8 },
//               size: { value: { min: 3, max: 6 } },
//               move: {
//                 enable: true,
//                 speed: 10,
//                 outModes: "destroy",
//               },
//             },
//             emitters: {
//               direction: "top",
//               rate: { delay: 0.1, quantity: 8 },
//             },
//           }}
//         />
//       )}

//       {/* Button / Message */}
//       {!clicked ? (
//         <button
//           onClick={handleWish}
//           className="px-10 py-5 bg-primary rounded-full text-xl shadow-lg hover:scale-105 transition-transform z-10"
//         >
//           🎂 Make a Wish 🎂
//         </button>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5, y: 50 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="z-10 text-center max-w-3xl px-4"
//         >
//           <h1 className="text-5xl sm:text-6xl font-bold mb-4">
//             Happy Birthday!
//           </h1>
//           <p className="text-xl sm:text-2xl leading-relaxed">
//             Today we celebrate everything about you — your strength, your courage,
//             and the story God is writing in your life. Every step, every challenge,
//             every quiet moment known only to Him. You are growing, shining, and
//             leaving a mark only you can leave. 💖
//           </p>
//         </motion.div>
//       )}
//     </section>
//   );
// }
