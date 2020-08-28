import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.png";
import Link from "next/link";
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiShoppingCart, GiSmartphone } from "react-icons/gi";
import { FaRegEnvelope } from "react-icons/fa";

import { TOGGLE_SIDE_BAR, TOGGLE_SIDE_CART } from "../../store/types";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.products);
  return (
    <div className="md:px-20 px-10 bg-white shadow py-3 flex justify-between items-center sticky top-0 z-50">
      <div>
        <ul className="hidden lg:flex items-center justify-center ">
          <li className="mx-2 text-gray-800 font-semibold hover:text-indigo-500">
            <Link href="/">
              <a className="flex items-center justify-center">
                <AiOutlineHome className="text-2xl inline-block hover:bg-white mr-2" />
                {"    "}
                <span> Home </span>
              </a>
            </Link>
          </li>
          <li className="mx-2 text-gray-800 font-semibold hover:text-indigo-500">
            <Link href="/about">
              <a className="flex items-center justify-center">
                <AiOutlineInfoCircle className="text-2xl inline-block mr-2" />{" "}
                <span> About </span>
              </a>
            </Link>
          </li>
          <li className="mx-2 text-gray-800 font-semibold hover:text-indigo-500">
            <Link href="/contact">
              <a className="flex items-center justify-center">
                <FaRegEnvelope className="text-2xl inline-block mr-2" />{" "}
                <span> Contact Us </span>
              </a>
            </Link>
          </li>
          <li className="mx-2 text-gray-800 font-semibold hover:text-indigo-500">
            <Link href="/products">
              <a className="flex items-center justify-center">
                {" "}
                <GiSmartphone className="text-2xl inline-block mr-2" />
                <span> Products </span>
              </a>
            </Link>
          </li>
        </ul>

        <AiOutlineBars
          className="text-2xl cursor-pointer lg:hidden "
          onClick={() => {
            dispatch({ type: TOGGLE_SIDE_BAR });
          }}
        />
      </div>
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
