import React from "react";

const ITEMS = [
  "SUGOI STORE",
  "NEW DROP 2026",
  "MADE IN CUENCA",
  "PARA GENTE BACANA",
  "DISEÑOS PERSONALIZADOS",
];

export const TickerTape: React.FC = () => {
  const fullList = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full overflow-hidden bg-black py-0.5 transform -rotate-1 scale-[1.60] z-20 border-t border-b-4 border-black -my-2">
      {/* Contenedor principal de la cinta */}
      <div className="bg-[#FFE600] py-2.5 flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-8 text-black font-['Bungee'] text-lg md:text-xl tracking-wider uppercase select-none">
          {fullList.map((item, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center gap-8">
                {item}
                <span className="text-black text-xl">★</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
