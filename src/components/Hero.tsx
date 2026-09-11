import { useRef, useEffect, useState } from "react";
import Cupula from "../assets/cupula-cuenca.webp";
import Poste from "../assets/poste-senales.webp";
import Semaforo from "../assets/semaforo-peatonal.webp";
import Personajes from "../assets/personajes.webp";
import Saltador from "../assets/saltador.webp";
import Taza from "../assets/taza.webp";
import Funda from "../assets/funda.webp";
import Buzo from "../assets/buzo.webp";
import Chica from "../assets/chica-movil.webp";

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
      className="relative w-full pt-8 pb-68 sm:pb-76 lg:pt-4 lg:pb-16 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-between border-b-4 border-black overflow-hidden bg-[#FFE600] min-h-screen bg-[radial-gradient(rgba(20,86,255,0.26)_1.2px,transparent_1.2px)] bg-size-[15px_15px]"
    >
      {/* El Conic gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `repeating-conic-gradient(from 0deg at ${centerOrigin}, #000 0deg 15deg, transparent 10deg 30deg)`,
        }}
      />

      {/* CÚPULA: sangra contra la esquina inferior derecha */}
      <img
        src={Cupula}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-72 translate-x-[50%] select-none sm:w-80 xl:w-[42rem] 2xl:w-[50rem]"
      />

      {/* PERSONAJES: gente con el merch, apoyados en el borde inferior */}
      <img
        src={Personajes}
        alt=""
        aria-hidden="true"
        className="hero-personajes pointer-events-none absolute bottom-0 left-[40rem] z-[2] h-56 w-auto -translate-x-1/2 select-none sm:h-64 lg:left-[48.75rem] lg:h-[min(24rem,calc(100vw-49rem))] lg:translate-x-0"
      />

      {/* SALTADOR y TAZA: banda libre junto al semáforo, sobre el título */}
      <img
        src={Saltador}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[22rem] top-20 z-[2] hidden h-[23rem] w-auto select-none lg:block"
      />
      <img
        src={Taza}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[48rem] top-40 z-[2] hidden h-54 w-auto rotate-25 select-none lg:block"
      />

      {/* FUNDA y BUZO: entre el poste y la catedral */}
      <img
        src={Funda}
        alt=""
        aria-hidden="true"
        className="pointer-events-none hero-funda absolute left-[108rem] top-[21rem] z-[3] h-84 w-auto rotate-35 select-none"
      />
      <img
        src={Buzo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none hero-buzo absolute left-[90rem] top-[5rem] z-[3] h-90 w-auto rotate-350 select-none"
      />

      {/* CHICA CON MÓVIL */}
      <img
        src={Chica}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[90rem] z-[2] hidden h-[26rem] w-auto select-none lg:block"
      />

      {/* POSTE DE SEÑALES: zona central */}
      <img
        src={Poste}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[60%] z-[1] h-[28vh] w-auto -translate-x-1/2 select-none sm:h-[32vh] lg:left-[51rem] lg:h-[80vh] lg:translate-x-0 xl:left-[min(62rem,calc(100vw-22rem))] xl:h-[88vh]"
      />

      {/* SELLO CIRCULAR: esquina superior derecha */}
      <div className="z-10 mb-6 ml-auto w-fit sm:absolute sm:top-28 sm:right-12 sm:mb-0 md:right-16 lg:right-24">
        <div ref={circleRef} className="hero-disc">
          {/* TEXTO ROTATIVO */}
          <svg
            viewBox="0 0 200 200"
            className="rotating-text"
            aria-hidden="true"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text
              fontFamily="Bungee"
              fontSize="12.9"
              fill="currentColor"
              letterSpacing="0.9"
            >
              <textPath href="#circlePath">
                SUGOI · ESTUCHES · HOODIES · CAMISETAS · MADE IN CUENCA ·{" "}
              </textPath>
            </text>
          </svg>

          {/* RAYO CENTRAL */}
          <svg viewBox="-1 0 24 24" className="hero-bolt" aria-hidden="true">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
          </svg>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL DE CONTENIDO */}
      <div className="relative z-10 w-full flex flex-col my-auto">
        {/* Columna Izq*/}
        <div className="flex-1 w-full flex flex-col items-start text-left z-10">
          {/* SEMÁFORO PEATONAL: encabeza la columna; el margen negativo
              cancela el padding de la sección para que toque el borde. */}
          <img
            src={Semaforo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none -ml-4 mb-14 h-44 w-auto select-none sm:-ml-12 sm:h-52 md:-ml-16 lg:-ml-24 lg:h-64"
          />

          {/* New Drop */}
          <div className="inline-flex items-center gap-2 bg-white text-black font-space font-bold text-xs sm:text-sm uppercase px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span>NEW DROP • 2026</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="hero-title">
            <span className="word">DISEÑOS</span>{" "}
            <span className="word">QUE</span>{" "}
            <span className="word">
              <span className="hl">GOLPEAN</span>
            </span>{" "}
            <span className="word">COMO</span>{" "}
            <span className="word">UN RAYO.</span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="font-space font-bold text-base sm:text-lg md:text-xl text-black/90 max-w-2xl mb-5">
            Camisetas, hoodies y estuches personalizados. Hechos a mano en
            Cuenca, para gente bacana.
          </p>

          {/* BOTONES */}
          <div className="hero-cta">
            <a href="#disena" className="btn btn--primary">
              Diseña tu prenda
              <svg viewBox="0 0 24 24" className="bolt-icon" aria-hidden="true">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </a>

            <a href="#catalogo" className="btn btn--ghost">
              Ver catálogo
            </a>
          </div>

          {/* VENTAJAS / BARRA INFERIOR */}
          <div className="grid grid-cols-3 gap-8 pt-4 border-t-2 border-black/20 w-full max-w-2xl text-black">
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
      </div>
    </section>
  );
};
