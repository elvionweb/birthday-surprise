import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PasswordGate from "./components/PasswordGate";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import EmotionalMessage from "./components/EmotionalMessage";
import DedicatedSongs from "./components/DedicatedSongs";
import MakeWish from "./components/MakeWish";
import Footer from "./components/Footer";
import Fireworks from "./components/Fireworks";
import DiscoLights from "./components/Discolights";
import { useMusic } from "./hooks/useMusic";


export default function App() {
  const navigate = useNavigate();
  const { play } = useMusic();

  const accessGranted = localStorage.getItem("access") === "true";

  // 🔒 Protect routes
  if (!accessGranted && window.location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      {/* Password */}
      <Route
        path="/"
        element={
          <PasswordGate
            onAccessGranted={() => {
              localStorage.setItem("access", "true");
              navigate("/hero");
            }}
          />
        }
      />

      {/* Hero */}
      <Route
        path="/hero"
        element={
          <Hero
            onStart={() => {
              play();
              navigate("/journey");
            }}
          />
        }
      />

      {/* Journey */}
      <Route
        path="/journey"
        element={
          <>
            <Fireworks />
            <DiscoLights />
            <Timeline />
            <Gallery />
            <EmotionalMessage />
            <DedicatedSongs />
            <MakeWish />
            <Footer celebrant="Serah" />
          </>
        }
      />
    </Routes>
  );
}
