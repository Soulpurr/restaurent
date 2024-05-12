"use client";
import { Navbar } from "@/components";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "@/container";
import "./App.css";
import { useState } from "react";
import { data } from "@/Constants";

export default function Home() {
  const [language, setlanguage] = useState("english");

  const manageLanguage = (value) => {
    setlanguage(value);
  };
  
  return (
    <div className="">
      <Navbar manageLanguage={manageLanguage} />
      <Header
        headerData={data.headerContent[language]}
        btn={data.exploreMenuBtn[language]}
      />
      <AboutUs aboutdata={data.aboutUs[language]} history={data.history[language]} know={data.knowMoreBtn[language]} />
      <SpecialMenu language={language} />
      <Chef chefdata={data.chef[language]} />
      <Intro />
      <Laurels laurels={data.award[language]} />
      <Gallery photo={data.photoGallery[language]} />
      <FindUs />
      <Footer />
    </div>
  );
}
