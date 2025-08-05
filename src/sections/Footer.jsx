import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-blue-500  rounded p-2 text-white">
      <nav className="grid grid-flow-col gap-4 text-sm font-semibold pt-5">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/skills" className="link link-hover">
          Skills
        </Link>
        <Link to="/about" className="link link-hover">
          About Me
        </Link>
        <Link to="/projects" className="link link-hover">
          Projects{" "}
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>

      <aside>
        <p className="pb-5">
          Copyright © {new Date().getFullYear()} - All right reserved by Md
          Sahidul Islam Sohel
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
