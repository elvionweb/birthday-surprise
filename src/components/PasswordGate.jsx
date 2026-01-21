import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const SECRET_PASSWORD = "happybirthday";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim().toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
      // ✅ Persist unlock
      localStorage.setItem("unlocked", "true");

      // ✅ SPA navigation (NO reload, back button works)
      navigate("/hero", { replace: true });
    } else {
      setError(true);
      setPassword("");

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center"
      >
        Secret Birthday Surprise
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center w-full max-w-sm"
      >
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter the secret password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white font-medium text-center text-gray-800 pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            aria-label="Toggle password visibility"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition-colors"
        >
          Unlock Surprise
        </button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-200 font-semibold"
          >
            ❌ Wrong password! Try again.
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}