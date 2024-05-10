import React from "react";
import "./Modal.css"
function Modal() {
  return (
    <div className="advice-container">
      <p className="paragraph text-xl">Contact Us</p>
      <div className="advice-details">
        Dial This number to place an order
      </div>
      <div className="pattern-divider">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"></path>
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3"></rect>
              <rect x="14" width="6" height="16" rx="3"></rect>
            </g>
          </g>
        </svg>
      </div>
      <button className="btn">
        <svg
          className="icon-dice"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Modal;
