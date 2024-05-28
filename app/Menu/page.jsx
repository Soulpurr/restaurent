"use client";

import menuData1 from "@/Constants/menudata2";
import { Navbar } from "@/components";
import Card1 from "@/components/Card/Card1";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { data } from "@/Constants";
import Link from "next/link";
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
      <div className="flex h-fit flex-col sm:flex-row sm:p-10 justify-center  sm:mt-10">
        <div className="absolute top-20 left-0 sm:hidden">
          <IoIosArrowForward
            color="white"
            onClick={() => {
              setmenuopen(!menuopen);
            }}
            size={40}
          />
        </div>

        <div className="sm:block sm:w-fit sm:w-[25%] mb-4 sm:mb-0 ">
          <Link href={"/Menu"} className="hidden hover:text-yellow-600 sm:block text-5xl font-bold text-center sm:text-left">
            Menu
          </Link>
          <div
            className={`z-50 h-full sm:h-auto overflow-y-visible bg-scroll top-0  p-4 sm:p-0 absolute sm:relative duration-100 ${
              menuopen
                ? " transition-transform duration-500 translate-x-0"
                : "-translate-x-full transition-transform duration-500"
            } sm:translate-x-0 w-[80%] bg-gray-950 sm:bg-transparent sm:w-full  sm:block  flex-col  sm:space-x-0 space-y-4 sm:space-y-8 sm:mt-6 overflow-x-scroll no-scrollbar`}
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
                <Image alt="404" src={"/logo1.png"} width={200} height={200} />
              </div>
              <h1 className="text-xl text-yellow-400 font-serif">BUDDHA'S</h1>
            </div>
            {Object.keys(menuData1).map((item, index) => (
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
        <div className="w-[1px] hidden sm:block bg-white"></div>

        <div
          className="min-h-[100vh] sm:w-[70%] sm:h-fit sm:brightness-100 sm:rounded-3xl sm:ml-4 flex flex-col  bg-cover  "
          style={{ backgroundImage: `url(${data.bgImg[type.toUpperCase()]})` }}
        >
          <div className="  flex w-full items-center flex-col justify-center">
            <h1 className="text-5xl text-[rgb(255,193,0)] font-serif">
              BUDDHA'S
            </h1>
            <hr className="w-56" />
            <h2 className="text-2xl sm:text-6xl font-semibold">
              {type.toUpperCase().replace(/_/g, " ")}
            </h2>
          </div>
          <div className="mt-8 flex justify-center w-full h-full ">
            <div className="border-solid border-2 bg-gray-950 bg-opacity-50  w-[90%] sm:w-[80%] h-fit rounded-2xl sm:mb-8 ">
              <div className="bg-opacity-100 brightness-200 ">
                <div className="flex flex-col space-y-2">
                  {menuData1[type].map((item, index) => (
                    <div
                      key={Math.floor(Math.random() * 1000000) + index}
                      className="text-white"
                    >
                      <Card1
                        key={Math.floor(Math.random() * 1000000) + index}
                        title={
                          item[
                            `name${
                              menuLanguage.charAt(0).toUpperCase() +
                              menuLanguage.slice(1)
                            }`
                          ]||item[
                            `name${
                              "English".charAt(0).toUpperCase() +
                              "English".slice(1)
                            }`
                          ]
                        }
                        desc={item.desc}
                        price={item.price}
                        type={item.type}
                        num={item.num}
                        vol={item?.volume}
                        alc={item?.alcoholPercentage}
                        manageOpen={manageOpen}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
