import { useEffect, useState } from "react";
import { Window } from "@/types/window";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Window>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
