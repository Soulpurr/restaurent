import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "@/Constants";
import "./Footer.css";
import Image from "next/image";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">
          Pärnu 60, Paide, 72712 Järva maakond, Estonia
        </p>
        <p className="p__opensans">+372 5056 274</p>
        <p className="p__opensans">+372 5056 274</p>
      </div>

      <div className="app__footer-links_logo">
        <div
          className="text-white text-2xl font-serif mb-2"
          style={{ fontSize: "2.25rem" }}
        >
          BUDDHA'S
        </div>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <Image
          src={images.spoon}
          alt="spoon_img"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <a
            href="https://www.instagram.com/buddhas_paide/?igsh=MW10NXRubHQxbmV5eQ%3D%3D"
            target="_blank"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Monday-Thursday:</p>
        <p className="p__opensans">10:00 am - 21:00 pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">11:00 am - 22:00 pm</p>
        <p className="p__opensans">Sunday:</p>
        <p className="p__opensans">10:00 am - 21:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 BUDDHAS. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
