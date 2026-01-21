// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function PasswordGate() {
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();
//   const SECRET_PASSWORD = "happybirthday";

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password.trim().toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
//       // ✅ Persist unlock
//       localStorage.setItem("unlocked", "true");

//       // ✅ SPA navigation (NO reload, back button works)
//       navigate("/hero", { replace: true });
//     } else {
//       setError(true);
//       setPassword("");

//       setTimeout(() => {
//         setError(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 px-4">
//       <motion.h1
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center"
//       >
//         Secret Birthday Surprise
//       </motion.h1>

//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="flex flex-col items-center w-full max-w-sm"
//       >
//         <div className="relative w-full mb-4">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter the secret password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white font-medium text-center text-gray-800 pr-12"
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword((prev) => !prev)}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//             aria-label="Toggle password visibility"
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition-colors"
//         >
//           Unlock Surprise
//         </button>

//         {error && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-4 text-red-200 font-semibold"
//           >
//             ❌ Wrong password! Try again.
//           </motion.p>
//         )}
//       </motion.form>
//     </div>
//   );
// }















import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordGate({ onAccessGranted }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const SECRET_PASSWORD = "happybirthday"; // Change to whatever you want

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
      localStorage.setItem("unlocked", "true");
  window.location.href = "/hero";
      onAccessGranted();
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 2000);
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              // Eye Off
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M9.88 5.08A9.97 9.97 0 0112 5c4.48 0 8.27 2.94 9.54 7a9.96 9.96 0 01-4.21 5.18M6.53 6.53A9.96 9.96 0 002.46 12c1.27 4.06 5.06 7 9.54 7 1.04 0 2.04-.16 2.98-.46"
                />
              </svg>
            ) : (
              // Eye
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.46 12C3.73 7.94 7.52 5 12 5c4.48 0 8.27 2.94 9.54 7-1.27 4.06-5.06 7-9.54 7-4.48 0-8.27-2.94-9.54-7z"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-25 bg-white text-purple-600 font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-200 transition-colors"
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

