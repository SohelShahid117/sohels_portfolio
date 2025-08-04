import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import TechnicalProficiency from "./sections/TechnicalProficiency.jsx";
import MyProjects from "./sections/MyProjects.jsx";
import ContactMe from "./sections/ContactMe.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<TechnicalProficiency />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/projects" element={<MyProjects />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
