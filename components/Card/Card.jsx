"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
function Card({ title, desc, price, type, manageOpen }) {
  const [selectedOption, setselectedOption] = useState("");
  const handleChange = (e) => {
    setselectedOption(e.target.value);
  };
  return (
    <div className="p-2 sm:h-[20rem] m-1 flex-col space-y-3 border-solid border-2 w-[20rem] duration-700 cursor-pointer sm:hover:scale-105">
      {/* <div className="img">
        <Image src={"/salmon.jpg"} height={400} width={700} />
      </div> */}
      <div className="text-md font-bold flex ml-2 ">{title}</div>
      {/* <div className="">
        <div className="flex space-x-2 items-center">
          <IoMdArrowDropup color="black" size={30} />
          <div className="text-sm font-serif">{type}</div>
        </div>
      </div> */}
      {typeof price != "object" ? (
        <div className="text-xl font-bold ml-2">€{price}</div>
      ) : (
        <div className="flex flex-col space-y-2 spce-x-0 sm:space-y-0 sm:flex-row sm:space-x-8">
          <select
            className="bg-gray-700 rounded-lg p-1"
            value={selectedOption}
            onChange={handleChange}
            name=""
            id=""
          >
            {Object.keys(price).map((item) => (
              <option value={item}>{item.toUpperCase()}</option>
            ))}
          </select>
          <div className="text-xl font-bold ml-2">€{price[selectedOption]}</div>
        </div>
      )}
      <div className="text-md ml-2">{desc}</div>
      <div className="ml-2">
        <button
          type="button"
          onClick={() => {
            manageOpen();
          }}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

export default Card;
