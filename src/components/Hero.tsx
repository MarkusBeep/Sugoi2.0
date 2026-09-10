import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Bolt from "../assets/favicon.svg";

export const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [centerOrigin, setCenterOrigin] = useState("80% 50%");

  // Calculo del cone gradient con el centro del Icono del rayo
  useEffect(() => {
    const updateOrigin = () => {
      if (circleRef.current && heroRef.current) {
        const circleRect = circleRef.current.getBoundingClientRect();
        const heroRect = heroRef.current.getBoundingClientRect();

        const x =
          ((circleRect.left + circleRect.width / 2 - heroRect.left) /
            heroRect.width) *
          100;
        const y =
          ((circleRect.top + circleRect.height / 2 - heroRect.top) /
            heroRect.height) *
          100;

        setCenterOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
      }
    };

    updateOrigin();
    window.addEventListener("resize", updateOrigin);
    return () => window.removeEventListener("resize", updateOrigin);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative w-full pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-between border-b-4 border-black overflow-hidden bg-[#FFE600] min-h-screen bg-[radial-gradient(rgba(20,86,255,0.26)_1.2px,transparent_1.2px)] bg-size-[15px_15px]"
    >
      {/* El Conic gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `repeating-conic-gradient(from 0deg at ${centerOrigin}, #000 0deg 15deg, transparent 10deg 30deg)`,
        }}
      />

      {/* CONTENEDOR PRINCIPAL DE CONTENIDO */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 my-auto">
        {/* Columna Izq*/}
        <div className="flex-1 w-full flex flex-col items-start text-left z-10">
          {/* New Drop */}
          <div className="inline-flex items-center gap-2 bg-white text-black font-space font-bold text-xs sm:text-sm uppercase px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span>NEW DROP • 2026</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="font-bungee text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight text-black uppercase leading-[1.1] mb-6">
            DISEÑOS QUE{" "}
            <span className="inline-block bg-[#1456FF] text-white px-4 py-1 rounded-3xl border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              GOLPEAN
            </span>{" "}
            COMO UN RAYO.
          </h1>

          {/* SUBTÍTULO */}
          <p className="font-space font-bold text-base sm:text-lg md:text-xl text-black/90 max-w-2xl mb-8">
            Camisetas, hoodies y estuches personalizados. Hechos a mano en
            Cuenca, para gente bacana.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#disena"
              className="font-bungee bg-[#1456FF] text-white text-sm sm:text-base uppercase px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x- hover:translate-y- hover:shadow-none transition-all flex items-center gap-2"
            >
              <span>Diseña Tu Prenda</span>
              <ArrowRight className="w-5 h-5 stroke-3]" />
            </a>

            <a
              href="#catalogo"
              className="font-bungee bg-white text-black text-sm sm:text-base uppercase px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x- hover:translate-y- hover:shadow-none transition-all"
            >
              Ver Catálogo
            </a>
          </div>

          {/* VENTAJAS / BARRA INFERIOR */}
          <div className="grid grid-cols-3 gap-8 pt-6 border-t-2 border-black/20 w-full max-w-2xl text-black">
            <div>
              <p className="font-bungee text-sm uppercase">5-7 DÍAS</p>
              <p className="font-space text-xs font-bold text-black/70">
                Entrega en Cuenca
              </p>
            </div>
            <div>
              <p className="font-bungee text-sm uppercase">WHATSAPP</p>
              <p className="font-space text-xs font-bold text-black/70">
                Atención directa
              </p>
            </div>
            <div>
              <p className="font-bungee text-sm uppercase">PAGO AL RECIBIR</p>
              <p className="font-space text-xs font-bold text-black/70">
                En toda Cuenca
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: SELLO CIRCULAR */}
        <div className="shrink-0 flex justify-center items-center lg:pr-12 relative z-10">
          <div
            ref={circleRef}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-100 xl:h-100 rounded-full bg-[#1456FF] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
          >
            {/* TEXTO ROTATIVO */}
            <svg
              className="absolute w-full h-full animate-[spin_12s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="font-bungee text-[6px] fill-[#FFE600] tracking-widest uppercase">
                <textPath href="#textPath">
                  • MADE IN CUENCA • SUGOI • ESTUCHES • HOODIES • CAMISETAS
                </textPath>
              </text>
            </svg>

            {/* RAYO CENTRAL */}
            <div className="bg-transparent p-6 z-10">
              <img
                src={Bolt}
                alt="Rayo Sugoi"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
