import React from "react";
import "./Modal.css"
import { IoIosClose } from "react-icons/io";
function Modal({manageOpen}) {
  return (
    <div className="advice-container">
      <p className="paragraph text-xl">Contact Us</p>
      <div className="advice-details">
        Dial This number to place an order
      </div>
      <div className="pattern-divider">
        
      </div>
      <button onClick={()=>{manageOpen()}} className="btn">
        <IoIosClose size={60}/>
      </button>
    </div>
  );
}

export default Modal;
