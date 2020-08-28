import React from "react";
import { useSelector } from "react-redux";
const CartTotal = () => {
  const { cart } = useSelector((state) => state.products);
  //* calc total price
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.total;
    });
    return total;
  };
  let total = getTotal();
  let tax = total * 0.1;
  let final = total + tax;

  return (
    <div className="text-3xl my-5 font-semibold flex flex-col items-center justify-center ">
      <p> Price : {total} $</p>
      <p> Tax : {tax} $</p>
      <p> Total : {final} $</p>
    </div>
  );
};

export default CartTotal;
