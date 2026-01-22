import { motion } from "framer-motion";
import SocialShare from "./SocialShare";
import logos from "../assets/logos.jpg"; // 


export default function Footer({ celebrant = "Elvis" }) {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="max-w-6xl mx-auto px-6 pt-5 md:pt-6 text-center">
        
        {/* Closing Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl font-semibold"
        >
          A special day for you
        </motion.p>

        {/* Divider */}
        <div className="my-3 h-px bg-white/30 w-full max-w-md mx-auto" />

        {/* Personalized Wish */}
        <p className="text-sm sm:text-base opacity-90">
          Wishing you endless joy,{" "}
          <span className="font-semibold">{celebrant}</span> 💖
        </p>

        {/* ✅ Social Share Buttons (BEST PLACE) */}
        <SocialShare message="I just got the sweetest birthday surprise!" />

        {/* Builder Credit */}
        <p className="mt-6 text-xs sm:text-sm opacity-80 flex items-center justify-center gap-2">
  <img
    src={logos}
    alt="Elvionweb Logo"
    className="w-8 h-8 object-contain"
  />
  Built by{" "}
  <a
    href="https://www.elvionweb.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold underline underline-offset-4 hover:opacity-100 transition-opacity"
  >
    Elvionweb
  </a>
</p>


        {/* Copyright */}
        <p className="mt-1 text-xs opacity-60">
          © {new Date().getFullYear()} Birthday Surprise
        </p>
      </div>
    </footer>
  );
}
