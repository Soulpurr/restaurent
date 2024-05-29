import React from "react";

import { SubHeading } from "../../components";
import { images } from "@/Constants";
import Image from "next/image";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h2 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h2>
      <div className="app__wrapper-content">
        <p className="p__opensans text-xl">
          Pärnu 60, Paide, 72712 Järva maakond, Estonia
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
        <a
          href="https://www.google.com/maps/place/P%C3%A4rnu+67,+Paide,+72715+J%C3%A4rva+maakond,+Estonia/@58.8864282,25.5527338,17z/data=!3m1!4b1!4m6!3m5!1s0x46933699ef995ac3:0xf3a9b69703bdb42b!8m2!3d58.8864282!4d25.5553087!16s%2Fg%2F11bw415g_w?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Us
        </a>
      </button>
    </div>

    <div className="app__wrapper_img">
      {/* <Image width={300} height={300} src={images.findus} alt="finus_img" /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8246.83429846002!2d25.5563464!3d58.8860046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469337dd6522e66d%3A0x3d175896db765e5f!2sBUDDHA&#39;S%20The%20taste%20of%20Asia!5e0!3m2!1sen!2sin!4v1716989302157!5m2!1sen!2sin"
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
