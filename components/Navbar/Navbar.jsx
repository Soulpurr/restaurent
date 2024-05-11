"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { images } from "@/Constants";
import "./Navbar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = ({manageLanguage}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedOption, setselectedOption] = useState("English");
  const handleChange = (e) => {
    setselectedOption(e.target.value);
    manageLanguage(e.target.value)
  };
  const router = useRouter();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo cursor-pointer">
        <Image
          onClick={() => router.push("/")}
          src={images.gericht}
          alt="app__logo"
        />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="space-x-3 app__navbar-login">
        <select className="bg-green-200 p-2 rounded-xl" onChange={handleChange} value={selectedOption} name="" id="">
          <option value="english">English</option>
          <option value="estonian">Estonian</option>
          <option value="russian">Russian</option>
        </select>

        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
