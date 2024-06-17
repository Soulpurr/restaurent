import { SubHeading } from "../../components";
import { images } from "@/Constants";
import "./Chef.css";
import Image from "next/image";

const Chef = ({ chefdata }) => (
  <div
    style={{ backgroundImage: "url(/bg.jpg)" }}
    className=" app__wrapper section__padding"
  >
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Image
        src={"/chef_image.jpg"}
        width={1280}
        height={1080}
        alt="chef_image"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={chefdata?.name} />
      <h2 className="headtext__cormorant">{chefdata?.headline}</h2>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <Image src={images.quote} alt="quote_image" />
          <p className="p__opensans">{chefdata?.content1}</p>
        </div>
        <p className="p__opensans"> {chefdata?.content2} </p>
      </div>

      <div className="app__chef-sign">
        <p>Balwant Bisht</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <Image src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
