import React from "react";
import "./Modal.css"
import { IoIosClose } from "react-icons/io";
function Modal({manageOpen}) {
  return (
    <div className="advice-container">
      <p className="paragraph text-xl">Contact Us</p>
      <div className="advice-details text-xl font-mono">
        Dial This +3725056274 to place an order
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
