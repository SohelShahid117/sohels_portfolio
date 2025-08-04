import React, { useState } from "react";

import ssLogo from "../assets/images/ss_logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const styles = {
    link: "hover:bg-white hover:text-slate-700 px-3 py-2 rounded-md transition-all duration-500 cursor-pointer",
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-img-gradient p-5 text-white sticky top-0  z-10   shadow shadow-blue-500 w-full  ">
      <div className="flex justify-between items-center mx-auto container">
        <Link to="/">
          {" "}
          <img
            src={ssLogo}
            alt=""
            className="bg-slate-50 h-10 w-20 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 "
          />
        </Link>

        {/* navbar for large screen */}
        <div className="">
          <ul className="hidden md:flex space-x-5 text-lg font-semibold  ">
            <li>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className={styles.link}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className={styles.link}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button className="bg-white  text-slate-800 px-4 py-2 rounded-full cursor-pointer text-lg font-semibold hidden md:block hover:scale-105 transition-all duration-300">
          <Link to="/contact"> Hired Me</Link>
        </button>

        <div className="cursor-pointer block md:hidden">
          {isMenuOpen ? (
            <MdOutlineClose
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-8"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-8"
            />
          )}
        </div>
      </div>

      {/* navbar for small screen */}
      {isMenuOpen && (
        <ul className="z-10 flex text-md font-semibold flex-col space-y-5 mt-4 text-center md:hidden">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.link} block`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.link} block`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.link} block`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.link} block`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.link} block`}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
