"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { images } from "@/Constants";
import "./Navbar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = ({ manageLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedOption, setselectedOption] = useState("English");
  const handleChange = (e) => {
    setselectedOption(e.target.value);
    manageLanguage(e.target.value);
  };
  const router = useRouter();
  return (
    <nav className="app__navbar items-center">
      <div className="flex flex-row space-x-1 items-center">
        <div className="border-2 border-gray-400 rounded-full cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src={"/logo1.png"}
            height={200}
            width={300}
            className="w-14 h-auto bg-transparent rounded-full "
            alt="app__logo"
          />
        </div>
        <Link
          href="/"
          className="hidden sm:block text-xl font-serif text-yellow-500"
        >
          BUDDHA'S
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link href="/">Home</Link>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <Link href="/Menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="space-x-3 app__navbar-login">
        <select
          className="bg-green-700 p-2 rounded-xl"
          onChange={handleChange}
          value={selectedOption}
          name=""
          id=""
        >
          <option value="english">English</option>
          <option value="estonian">Estonian</option>
          <option value="russian">Russian</option>
        </select>

        
      </div>
      <select
        className="bg-green-700 p-2 rounded-xl sm:hidden"
        onChange={handleChange}
        value={selectedOption}
        name=""
        id=""
      >
        <option value="english">English</option>
        <option value="estonian">Estonian</option>
        <option value="russian">Russian</option>
      </select>
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
                <Link href="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <Link href="/Menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
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
