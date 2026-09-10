import { Navbar } from "./components/Navbar";
import "./App.css";
import { Hero } from "./components/Hero";
import { TickerTape } from "./components/TickerTape";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TickerTape></TickerTape>
    </>
  );
}

export default App;
