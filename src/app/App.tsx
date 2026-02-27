import { useEffect, useRef, useState } from "react";
import { AnimatedSlide } from "./components/AnimatedSlide";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 5449;

export default function App() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      setScale(vw / DESIGN_WIDTH);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: DESIGN_HEIGHT }}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <AnimatedSlide />
      </div>
    </div>
  );
}