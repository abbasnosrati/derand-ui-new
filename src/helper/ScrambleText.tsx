import { useEffect, useState } from "react";

interface ScrambleTextProps {
  value: string;
}

const ScrambleText = ({ value }: ScrambleTextProps) => {
  const [displayedText, setDisplayedText] = useState(value);
  const letters = "1234567890";

  useEffect(() => {
    let interval: number | null = null;
    let currentIteration = 0;

    interval = window.setInterval(() => {
      setDisplayedText((prevText) =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < currentIteration) {
              return value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      currentIteration += 1;

      if (currentIteration > value.length) {
        if (interval !== null) clearInterval(interval);
      }
    }, 50);

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [value]);

  return <div>{displayedText}</div>;
};

export default ScrambleText;
