import React, { useState } from "react";
import Hero from "./components/Hero";
import Fireworks from "./components/Fireworks";
import MakeWish from "./components/MakeWish";
import DiscoLights from "./components/Discolights";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import { useMusic } from "./hooks/useMusic";
import PasswordGate from "./components/PasswordGate";
import Footer from "./components/Footer";
import DedicatedSongs from "./components/DedicatedSongs";
import EmotionalMessage from "./components/EmotionalMessage";

export const App = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [started, setStarted] = useState(false);
  const { play } = useMusic();

  const start = () => {
    setStarted(true);
    play();
  };

  if (!accessGranted) {
    return <PasswordGate onAccessGranted={() => setAccessGranted(true)} />;
  }

  return (
    <>
      {started && <Fireworks />}
      {started && <DiscoLights />}
      {!started ? (
        <Hero onStart={start} />
      ) : (
        <>
          <Timeline />
          <Gallery />
          <EmotionalMessage />
          <DedicatedSongs />
          <MakeWish />
          <Footer celebrant="Serah" />
        </>
      )}
    </>
  );
};

export default App;
