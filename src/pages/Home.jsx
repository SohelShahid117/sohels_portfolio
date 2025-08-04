import React from "react";
import Hero from "./../sections/Hero";
import TechnicalProficiency from "../sections/TechnicalProficiency";
import AboutMe from "../sections/AboutMe";
import MyProjects from "../sections/MyProjects";
import ContactMe from "../sections/ContactMe";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default Home;
