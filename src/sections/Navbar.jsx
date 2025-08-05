import React, { useState } from "react";

import ssLogo from "../assets/images/ss_logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router";

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} bg-white text-black`
                    : `${styles.link}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} bg-white text-black`
                    : `${styles.link}`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} bg-white text-black`
                    : `${styles.link}`
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} bg-white text-black`
                    : `${styles.link}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} bg-white text-black`
                    : `${styles.link}`
                }
              >
                Contact
              </NavLink>
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
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} bg-white text-black block`
                  : `${styles.link} block`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} bg-white text-black block`
                  : `${styles.link} block`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} bg-white text-black block`
                  : `${styles.link} block`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} bg-white text-black block`
                  : `${styles.link} block`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} bg-white text-black block`
                  : `${styles.link} block`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
