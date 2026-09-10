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
    <div className="relative w-full overflow-hidden bg-black py-3 my-6 transform -rotate-2 border-y-4 border-black shadow-[0_8px_0_0_#1456FF]">
      {/* Tape container*/}
      <div className="bg-[#FFE600] py-3 border-y-2 border-black flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-8 text-black font-['Bungee'] text-xl md:text-2xl tracking-wider uppercase select-none">
          {fullList.map((item, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center gap-8">
                {item}
                <span className="text-black text-2xl">★</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
