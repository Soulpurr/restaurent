"use client";
import menuData from "@/Constants/menuData";
import { Navbar } from "@/components";
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";

function Page() {
  const [open, setopen] = useState(false);
  const manageOpen = () => {
    setopen(!open);
  };
  const [menuLanguage, setmenuLanguage] = useState("english");
  const manageMenuLang = (value) => {
    setmenuLanguage(value);
  };
  console.log(menuLanguage);
  const [type, settype] = useState("Starter");
  return (
    <div className="bg-black">
      <Navbar manageLanguage={manageMenuLang} />
      <div
        className={`z-50 fixed inset-0 flex items-center justify-center sm:left-[14%] ${
          open ? "" : "hidden"
        }`}
      >
        <Modal manageOpen={manageOpen} />
      </div>
      <div className="flex flex-col sm:flex-row p-10 justify-center mt-10">
        <div className=" sm:block sm:w-fit lg:w-[30%]">
          <div className="text-5xl font-bold ">Menu</div>
          <div className="flex  flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-8 mt-6 overflow-x-scroll no-scrollbar">
            {Object.keys(menuData).map((item, index) => (
              <div
                className="border-solid border-2 border-green-200 rounded-lg px-1 text-xl h-8 sm:border-none w-fit font-serif cursor-pointer hover:text-yellow-300 "
                key={index}
                onClick={() => {
                  settype(item);
                }}
              >
                {item?.toUpperCase().replace(/_/g, " ")}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-[60%] flex flex-col  ">
          <h1 className="font-extrabold text-2xl text-green-400 text-center">{type.toUpperCase()}</h1>
        <div className=" flex flex-wrap h-fit justify-center ">
          
          {menuData[type].map((item, index) => (
            <div key={index} className="">
              <Card
                title={
                  item[`name${menuLanguage.charAt(0).toUpperCase() + menuLanguage.slice(1)}`]
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
