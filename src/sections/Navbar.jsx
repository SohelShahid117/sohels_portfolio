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
    <nav className="bg-slate-700 p-3 text-white ">
      <div className="flex justify-between items-center mx-auto container">
        {/* <h1>Sohel Shahid</h1> */}
        <img
          src={ssLogo}
          alt=""
          className="bg-slate-50 h-10 w-20 rounded-full cursor-pointer"
        />

        {/* navbar for large screen */}
        <di className="">
          <ul className="hidden sm:flex space-x-5  ">
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
        </di>

        <button className="bg-white text-slate-700 px-2 py-2 rounded-full cursor-pointer text-md font-semibold hidden sm:block">
          Hired Me
        </button>

        <div
          className="cursor-pointer block sm:hidden"
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
        <ul className="flex flex-col space-y-5 mt-4 text-center sm:hidden">
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
