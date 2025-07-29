import React, { useState } from "react";
import { menu_links } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto z-10 sticky top-5 bg-img-gradient ">
      <div className="flex items-center justify-between rounded-full z-10 bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* logo */}
        {/* <img src="" alt="" /> */}
        <h1>Sohel Shahid</h1>
        {/* <ul className={isOpen ? "flex" : "hidden"}> */}
        <ul className="menu-wrapper">
          {/* <ul className="hidden"> */}
          {menu_links.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.to}>{menu.label}</Link>
            </li>
          ))}
        </ul>
        <button>Hire me</button>
      </div>
    </nav>
  );
};

export default Navbar;
