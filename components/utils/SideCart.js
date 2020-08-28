import React from "react";
import Link from "next/link";
import { btn } from "./tailwindutil";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const SideCart = ({ isOpen }) => {
  const { cart } = useSelector((state) => state.products);
  const showClass = isOpen ? "translate-x-0" : "translate-x-full";
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  };

  return (
    <div
      className={`sidecart shadow-md flex flex-col items-center  transform ${showClass}  transition-all duration-500 ease-in-out z-30 overflow-auto `}
    >
      <ul className="flex flex-col items-center mt-5">
        {cart.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center my-2">
              <img src={`${item.image.url}?webp`} width="45px" />
              <p className="font-semibold my-2 ">{item.title}</p>
              <p>amount: {item.count}</p>
            </li>
          );
        })}
      </ul>
      <div className="my-2 text-lg">total coast : {getTotal()} $</div>
      <Link href="/cart">
        <a className={`${btn}  `}>
          Go to cart <MdAddShoppingCart className="inline-block text-xl ml-2" />
        </a>
      </Link>
    </div>
  );
};

export default SideCart;
