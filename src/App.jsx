import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <TechnicalProficiency />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
