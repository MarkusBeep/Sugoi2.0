import { useState, useEffect } from "react";
import Bolt from "../assets/favicon.svg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#1456FF] border-b-4 border-black py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO SUGOI.ST CON RAYO */}
        <a
          href="#"
          className="nav-logo flex items-center gap-1.5 text-2xl font-black font-bangers tracking-wide text-black"
        >
          <img src={Bolt} alt="favicon" className="w-6 h-6 " />
          <span className="font-bangers">SUGOI.ST</span>
        </a>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="hidden lg:flex items-center gap-6 font-bangers font-bold text-sm tracking-wider uppercase">
          <a
            href="#inicio"
            className="font-bangers bg-yellow-300 text-black px-4 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x- hover:translate-y- hover:shadow-none transition-all"
          >
            Inicio
          </a>
          <a
            href="#categorias"
            className="text-black hover:opacity-75 transition-opacity"
          >
            Categorías
          </a>
          <a
            href="#catalogo"
            className="text-black hover:opacity-75 transition-opacity"
          >
            Catálogo
          </a>
          <a
            href="#disena"
            className="text-black hover:opacity-75 transition-opacity"
          >
            Diseña
          </a>
          <a
            href="#acerca"
            className="text-black hover:opacity-75 transition-opacity"
          >
            Acerca
          </a>
          <a
            href="#contacto"
            className="text-black hover:opacity-75 transition-opacity"
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN CON FUENTE BUNGEE */}
        <a
          href="#disena"
          className="font-bungee bg-yellow-300 text-black text-xs uppercase px-5 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x- hover:translate-y- hover:shadow-none transition-all"
        >
          Diseña tu prenda
        </a>
      </div>
    </nav>
  );
};
