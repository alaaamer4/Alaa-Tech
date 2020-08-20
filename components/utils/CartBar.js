import React from "react";

const CartBar = ({ isOpen }) => {
  const showClass = isOpen ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`sidecart shadow w-64 transform ${showClass}  transition-all duration-500 ease-in-out`}
    ></div>
  );
};

export default CartBar;
