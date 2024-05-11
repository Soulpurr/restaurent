import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "@/Constants";
import "./Laurels.css";
import Image from "next/image";

const AwardCard = ({ imgUrl, title, subtitle }) => (
  <div className="app__laurels_awards-card">
    {/* <Image src={imgUrl} alt="awards" /> */}
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = ({laurels}) => {
 
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">{laurels?.name}</h1>

        <div className="app__laurels_awards">
          <AwardCard title={laurels.first} subtitle={laurels.firstContent}/>
          <AwardCard title={laurels.second} subtitle={laurels.secondContent}/>
          <AwardCard title={laurels.third} subtitle={laurels.thirdContent}/>
          <AwardCard title={laurels.fourth} subtitle={laurels.fourthContent}/>
        </div>
      </div>

      <div className="app__wrapper_img">
        <Image src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
};

export default Laurels;
