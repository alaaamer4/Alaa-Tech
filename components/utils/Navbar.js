import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { TOGGLE_SIDE_BAR, TOGGLE_SIDE_CART } from "../../store/types";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.products);
  return (
    <div className="md:px-40 px-10 bg-white shadow py-3 flex justify-between items-center sticky top-0 z-50">
      <AiOutlineBars
        className="text-2xl cursor-pointer md:mx-0 "
        onClick={() => {
          dispatch({ type: TOGGLE_SIDE_BAR });
        }}
      />
      <div className="flex cursor-pointer" onClick={() => router.push("/")}>
        <h1 className="font-bold text-2xl text-gary-800 ">Tech </h1>
        <img src={logo} className="w-10 mx-2" />
        <h1 className="font-bold text-2xl text-indigo-600"> Store </h1>
      </div>
      <div className="relative hidden md:block">
        <GiShoppingCart
          className="text-2xl cursor-pointer m-2 "
          onClick={() => {
            dispatch({ type: TOGGLE_SIDE_CART });
          }}
        />
        <small className="font-bold text-indigo-100 absolute top-0 right-0 bg-indigo-500 rounded-full px-1">
          {navState.cartItems}
        </small>
      </div>
    </div>
  );
};

export default Navbar;
