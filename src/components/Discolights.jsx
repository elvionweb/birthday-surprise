import { motion } from "framer-motion";
import { useMemo } from "react";

export default function DiscoLights() {
  const lights = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        color: ["#ff5ea8", "#7c5cff", "#ffd166"][i % 3],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: i * 0.2,
      })),
    []
  );

  return (
    <div className="absolute overflow-hidden inset-0 pointer-events-none">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute overflow-hidden w-4 h-4 rounded-full"
          style={{
            background: light.color,
            top: light.top,
            left: light.left,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: light.delay,
          }}
        />
      ))}
    </div>
  );
}
