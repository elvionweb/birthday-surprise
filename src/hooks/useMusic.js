import { Howl } from "howler";
import music from "../assets/applause-cheer-236786.mp3";

const bgMusic = new Howl({
  src: [music],
  loop: false,
  volume: 0.4,
});

export const useMusic = () => {
  const play = () => {
    if (!bgMusic.playing()) bgMusic.play();
  };

  const stop = () => bgMusic.stop();

  return { play, stop };
};
