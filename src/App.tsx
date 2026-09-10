import { Navbar } from "./components/Navbar";
import "./App.css";
import { Hero } from "./components/Hero";
import { TickerTape } from "./components/TickerTape";
import { ComicHoverListener } from "./components/ComicHoverListener";

function App() {
  return (
    <ComicHoverListener>
      <Navbar />
      <Hero />
      <TickerTape />
    </ComicHoverListener>
  );
}

export default App;
