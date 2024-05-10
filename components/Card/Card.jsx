import Image from "next/image";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
function Card({title,desc,price,type}) {
  return (
    <div className="card m-2 flex-col space-y-3 border-solid border-2 sm:w-[20rem] duration-700 cursor-pointer hover:scale-105">
      <div className="img">
        <Image src={"/salmon.jpg"} height={400} width={700} />
      </div>
      <div className="text-md font-bold flex ml-2 ">
        {title}
      </div>
      <div className="">
        <div className="flex space-x-2 items-center">
          <IoMdArrowDropup color="black" size={30} />
          <div className="text-sm font-serif">{type}</div>
        </div>
      </div>
      <div className="text-xl font-bold ml-2">€{price}</div>
      <div className="text-md ml-2">
        {desc}
      </div>
      <div className="ml-2">
        <button
          type="button"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

export default Card;
