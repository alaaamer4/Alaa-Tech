import React from "react";

const CartColumn = () => {
  return (
    <div className=" grid-cols-6 gap-8 px-20 my-5 hidden lg:grid  ">
      <p className="uppercase font-semibold mr-16 text-center  ">Products</p>
      <p className="uppercase font-semibold mr-16 text-center  ">Name</p>
      <p className="uppercase font-semibold mr-16 text-center  ">Price</p>
      <p className="uppercase font-semibold mr-16 text-center">quantity</p>
      <p className="uppercase font-semibold mr-16 text-center  ">Remove</p>
      <p className="uppercase font-semibold mr-16 text-center  ">Total</p>
    </div>
  );
};

export default CartColumn;
