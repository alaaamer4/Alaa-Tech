import React from "react";
import CartList from "./CartList";
import CartColumn from "./CartColumn";
import CartTotal from "./CartTotal";
const Cart = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20  ">
      {/* title */}
      <h1 className="text-3xl font-bold uppercase">Your Cart</h1>
      <div className="h-1 mx-12 mt-2  w-24 bg-indigo-600 rounded-full mb-4 "></div>
      <CartColumn />
      <CartList />
      <CartTotal />
    </div>
  );
};

export default Cart;
