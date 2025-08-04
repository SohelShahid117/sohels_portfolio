import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import MyProjects from "./sections/MyProjects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <Hero />
        <TechnicalProficiency />
        <AboutMe />
        <MyProjects />
        <ContactMe /> */}

        <main className="min-h-screen">{<Outlet />}</main>
        <Footer />
      </div>
    </>
  );
}

export default App;
