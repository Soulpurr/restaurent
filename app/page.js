import { Navbar } from "@/components";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "@/container";
import './App.css';

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
   </div>
  );
}
