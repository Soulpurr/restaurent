"use client";
import menuData from "@/Constants/menuData";
import { Navbar } from "@/components";
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Page() {
  const [open, setopen] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
  const manageOpen = () => {
    setopen(!open);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const [menuLanguage, setmenuLanguage] = useState("english");
  const manageMenuLang = (value) => {
    setmenuLanguage(value);
  };

  const [type, settype] = useState("Starter");
  return (
    <div className="bg-black text-white">
      <Navbar manageLanguage={manageMenuLang} />
      <div
        className={`z-50 fixed inset-0 flex items-center justify-center sm:left-[14%] ${
          open ? "" : "hidden"
        }`}
      >
        <Modal manageOpen={manageOpen} />
      </div>
      <div className="flex flex-col sm:flex-row sm:p-10 justify-center mt-2 sm:mt-10">
        <div className="absolute top-20 left-0 sm:hidden">
          <IoIosArrowForward
            color="white"
            onClick={() => {
              setmenuopen(!menuopen);
            }}
            size={40}
          />
        </div>
        <div className="sm:block sm:w-fit lg:w-[30%] mb-4 sm:mb-0">
          <div className="text-5xl font-bold text-center sm:text-left">
            Menu
          </div>
          <div
            className={`z-50 h-full sm:h-auto overflow-y-visible bg-scroll top-0  p-4 sm:p-0 absolute sm:relative duration-100 ${
              menuopen
                ? " transition-transform duration-500 translate-x-0"
                : "-translate-x-full transition-transform duration-500"
            } sm:translate-x-0 w-[80%] bg-gray-950 sm:bg-transparent sm:w-full  sm:block  flex-col  sm:space-x-0 space-y-4 sm:space-y-8 mt-6 overflow-x-scroll no-scrollbar`}
          >
            <div className="absolute sm:hidden right-0 top-1 mb-4">
              <RxCross1
                onClick={() => {
                  setmenuopen(!menuopen);
                }}
                color="red"
                size={40}
              />
            </div>
            <div className="flex flex-row sm:hidden items-center space-x-4">
              <div className="bg-transparent rounded-full border-2 border-gray-200 w-16">
                <Image src={"/logo1.png"} width={200} height={200} />
              </div>
              <h1 className="text-xl text-yellow-400 font-serif">BUDDHA'S</h1>
            </div>
            {Object.keys(menuData).map((item, index) => (
              <div
                className=" rounded-lg px-1 font-bold text-md sm:text-xl h-8 sm:border-none w-fit sm:font-serif cursor-pointer hover:text-yellow-300 "
                key={Math.floor(Math.random() * 1000000) + index}
                onClick={() => {
                  settype(item);
                  setmenuopen(false);
                  scrollToTop();
                }}
              >
                {item?.toUpperCase().replace(/_/g, " ")}
              </div>
            ))}
          </div>
        </div>

        <div className="sm:w-[60%] flex flex-col  ">
          <h1 className="font-extrabold text-xl sm:text-2xl text-green-400 text-center mb-4">
            {type?.toUpperCase().replace(/_/g, " ")}
          </h1>
          <div className=" flex flex-wrap h-fit justify-center ">
            {menuData[type].map((item, index) => (
              <div
                key={Math.floor(Math.random() * 1000000) + index}
                className="text-white"
              >
                <Card
                  key={Math.floor(Math.random() * 1000000) + index}
                  title={
                    item[
                      `name${
                        menuLanguage.charAt(0).toUpperCase() +
                        menuLanguage.slice(1)
                      }`
                    ]
                  }
                  desc={item.desc}
                  price={item.price}
                  type={item.type}
                  manageOpen={manageOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
