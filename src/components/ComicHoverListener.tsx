import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ONOMATOPOEIAS = [
  "¡BOOM!",
  "¡POW!",
  "¡PLOP!",
  "¡ZAP!",
  "¡SUGOI!",
  "¡KAPOW!",
  "¡BANG!",
  "¡KABOOM!",
];

// Paleta Pop-Art
const POP_COLORS = [
  "#1456FF",
  "#FFE600",
  "#FF2A85",
  "#00E5FF",
  "#FF5722",
  "#A855F7",
  "#00FF66",
];

interface HoverState {
  word: string;
  x: number;
  y: number;
  color: string;
}

export const ComicHoverListener: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeHover, setActiveHover] = useState<HoverState | null>(null);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("button, a, [role='button']");

      if (clickable) {
        const rect = clickable.getBoundingClientRect();
        const rawWord =
          ONOMATOPOEIAS[Math.floor(Math.random() * ONOMATOPOEIAS.length)];

        // capitalizar
        const formattedWord =
          rawWord.charAt(0) +
          rawWord.charAt(1).toUpperCase() +
          rawWord.slice(2).toLowerCase();

        // randomizar color
        const randomColor =
          POP_COLORS[Math.floor(Math.random() * POP_COLORS.length)];

        setActiveHover({
          word: formattedWord,
          x: rect.right - 10 + window.scrollX,
          y: rect.top - 35 + window.scrollY,
          color: randomColor,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [role='button']")) {
        setActiveHover(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {children}

      <AnimatePresence>
        {activeHover && (
          <motion.span
            key={`${activeHover.word}-${activeHover.x}-${activeHover.y}`}
            initial={{ opacity: 0, scale: 0.3, y: 10, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 6 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: -10,
              transition: { duration: 0.12 },
            }}
            transition={{ type: "spring", stiffness: 450, damping: 15 }}
            style={{
              left: `${activeHover.x}px`,
              top: `${activeHover.y}px`,
              WebkitTextFillColor: activeHover.color, // Color dinámico del relleno
              WebkitTextStroke: "5px black", // Borde negro de 3px
              paintOrder: "stroke fill", // Dibuja el borde por detrás del relleno
              textShadow: "4px 4px 0px #000",
            }}
            className="fixed z-50 pointer-events-none font-['Bangers'] text-[35px] tracking-widest select-none bg-transparent p-0 m-0 border-none shadow-none leading-none"
          >
            {activeHover.word}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
};
