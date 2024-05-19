import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "@/Constants";

import "./SpecialMenu.css";
import Image from "next/image";
import menuData from "@/Constants/menuData";
import Link from "next/link";

const SpecialMenu = ({ language }) => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Deserts</p>
        <div className="app__specialMenu_menu_items">
          {menuData.desserts.map((desert, index) => (
            <MenuItem
              key={desert.nameEnglish + index}
              title={
                desert[
                  `name${language.charAt(0).toUpperCase() + language.slice(1)}`
                ]
              }
              price={desert.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {menuData.ice_Cream_Cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={
                cocktail[
                  `name${language.charAt(0).toUpperCase() + language.slice(1)}`
                ]
              }
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a
        download="menu.pdf"
        href={"/menu.pdf"}
        type="button"
        className="custom__button"
      >
        Download Now
      </a>
    </div>
  </div>
);

export default SpecialMenu;
