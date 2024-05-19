import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '@/Constants';
import './Footer.css';
import Image from 'next/image';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Pärnu 67-71, Paide, 72718 Järva maakond, Estonia</p>
        <p className="p__opensans">+372 5818 7893</p>
        <p className="p__opensans">+372 5818 7893</p>
      </div>

      <div className="app__footer-links_logo">
        
        <div className='text-white text-2xl font-serif mb-2' style={{fontSize:"2.25rem"}}>BUDDHA'S</div>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <Image src={images.spoon} alt='spoon_img' className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Thursday:</p>
        <p className="p__opensans">10:00 am - 21:00 pm</p>
        <p className="p__opensans">Friday-Sunday:</p>
        <p className="p__opensans">11:00 am - 22:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 BUDDHAS. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
