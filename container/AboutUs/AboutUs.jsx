import React from "react";

import { images } from "@/Constants";
import "./AboutUs.css";
import Image from "next/image";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <Image src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          From Farm to Fork, With Heart: We believe in sourcing fresh, local
          ingredients and transforming them into dishes made with love and care
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <Image src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <Image src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Rooted in Tradition, Evolving with You: Our history is rich, our
          future is full of flavor.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
