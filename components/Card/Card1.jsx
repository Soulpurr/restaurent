"use client";

import React, { useState } from "react";

function Card1({ title, desc, price, type, manageOpen }) {
  const [selectedOption, setselectedOption] = useState("");
  const handleChange = (e) => {
    setselectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between p-4">
      {/* <div className="img">
        <Image src={"/salmon.jpg"} height={400} width={700} />
      </div> */}
      <div onClick={()=>manageOpen()} className="text-md sm:text-2xl cursor-pointer hover:text-yellow-300 font-bold flex ml-2 ">{title}</div>
      {/* <div className="">
        <div className="flex space-x-2 items-center">
          <IoMdArrowDropup color="black" size={30} />
          <div className="text-sm font-serif">{type}</div>
        </div>
      </div> */}
      {typeof price != "object" ? (
        <div className="text-sm sm:text-xl font-bold ml-2">€{price}</div>
      ) : (
        <div className="flex flex-col space-y-2 spce-x-0 sm:space-y-0 sm:flex-row sm:space-x-8">
          <select
            className="bg-gray-700 rounded-lg p-1 w-[60%]"
            value={selectedOption}
            onChange={handleChange}
            name=""
            id=""
          >
            {Object.keys(price).map((item) => (
              <option key={Math.random(1,2)+price} value={item}>{item.toUpperCase()}</option>
            ))}
          </select>
          <div className="text-xl font-bold ml-2">€{price[selectedOption]}</div>
        </div>
      )}
      
      
    </div>
  );
}

export default Card1;
