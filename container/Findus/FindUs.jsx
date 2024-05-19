import React from "react";

import { SubHeading } from "../../components";
import { images } from "@/Constants";
import Image from "next/image";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans text-xl">
          Pärnu 67-71, Paide, 72718 Järva maakond, Estonia
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Thus: 10:00 am - 21.00 pm</p>
        <p className="p__opensans">Fri - Sun: 11:00 am - 22.00 pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      {/* <Image width={300} height={300} src={images.findus} alt="finus_img" /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.6833219973896!2d25.55273377699947!3d58.88642817440284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46933699ef995ac3%3A0xf3a9b69703bdb42b!2sP%C3%A4rnu%2067%2C%20Paide%2C%2072715%20J%C3%A4rva%20maakond%2C%20Estonia!5e0!3m2!1sen!2sin!4v1716121655734!5m2!1sen!2sin"
        width="600"
        height="450"
        className="w-[90%] sm:w-[25rem]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
