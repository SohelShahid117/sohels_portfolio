import React, { useState } from "react";
import { Link } from "react-scroll";
import ssLogo from "../assets/images/ss_logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const styles = {
    link: "hover:bg-white hover:text-slate-700 px-3 py-2 rounded-md transition-all duration-500 cursor-pointer",
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-img-gradient p-5 text-white ">
      <div className="flex justify-between items-center mx-auto container">
        {/* <h1>Sohel Shahid</h1> */}
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
          <ul className="hidden md:flex space-x-5  ">
            <li>
              <Link to="/hi" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/hi" className={styles.link}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/hi" className={styles.link}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/hi" className={styles.link}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/hi" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button className="bg-white text-slate-700 px-4 py-2 rounded-full cursor-pointer text-md font-semibold hidden md:block hover:scale-105 transition-all duration-300">
          Hired Me
        </button>

        <div
          className="cursor-pointer block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdOutlineClose className="w-10 h-8" />
          ) : (
            <GiHamburgerMenu className="w-10 h-8" />
          )}
        </div>
      </div>

      {/* navbar for small screen */}
      {isMenuOpen && (
        <ul className="flex flex-col space-y-5 mt-4 text-center md:hidden">
          <li>
            <Link to="/hi" className={`${styles.link} block`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/hi" className={`${styles.link} block`}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/hi" className={`${styles.link} block`}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/hi" className={`${styles.link} block`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/hi" className={`${styles.link} block`}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
