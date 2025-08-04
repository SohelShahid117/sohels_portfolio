import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-blue-500 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#" className="link link-hover">
          Home
        </a>
        <a href="#skills" className="link link-hover">
          Skills
        </a>
        <a href="#about" className="link link-hover">
          About Me
        </a>
        <a href="#projects" className="link link-hover">
          Projects{" "}
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Md
          Sahidul Islam Sohel
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
