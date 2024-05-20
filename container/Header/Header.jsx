import React from "react";
import { SubHeading } from "../../components";
import "./Header.css";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/Constants";

const Header = ({ headerData }) => {
  
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="text-white text-xl sm:text-3xl font-serif">{headerData?.upperContent} </h1>
        <h2 className="app__header-h1">{headerData?.heading}</h2>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {headerData?.bottom}
        </p>
        <Link href={"/Menu"} type="button" className="custom__button">
          Explore Menu
        </Link>
      </div>

      <div className="app__wrapper_img">
        <Image src={images.welcom} alt="header_img" loading="lazy" />
      </div>
    </div>
  );
};

export default Header;
