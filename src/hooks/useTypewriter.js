import { useEffect, useState } from "react";

export default function useTypewriter(
  text,
  speed = 45,
  pauseBeforeRestart = 3000
) {
  const [displayedText, setDisplayedText] = useState("");
   const [isTyping, setIsTyping] = useState(true);


  useEffect(() => {
    let index = 0;
    let timeoutId;
    let intervalId;

    const startTyping = () => {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;

        if (index >= text.length) {
          clearInterval(intervalId);
          setIsTyping(false); // ⬅ stop cursor

          timeoutId = setTimeout(() => {
            setDisplayedText("");
            index = 0;
            startTyping();
          }, pauseBeforeRestart);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, pauseBeforeRestart]);

  return { displayedText, isTyping };
}
