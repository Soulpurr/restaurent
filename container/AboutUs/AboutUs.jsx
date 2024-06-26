import React from "react";

import { images } from "@/Constants";
import "./AboutUs.css";
import Image from "next/image";

const AboutUs = ({ aboutdata, know, history }) => (
  <div
    className="app__aboutus  flex__center section__padding"
    id="about"
    style={{backgroundImage:"url(/bg.jpg)"}}
  >
    <div className="app__aboutus-overlay flex__center">
      <Image src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">{aboutdata?.name}</h2>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{aboutdata?.content}</p>
        <button type="button" className="custom__button">
          {know.name}
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <Image src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">{history?.name}</h2>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{history?.content}</p>
        <button type="button" className="custom__button">
          {know?.name}
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
