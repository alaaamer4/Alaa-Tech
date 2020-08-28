import React, { useState } from "react";
import * as types from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);
  const [total, setTotal] = useState(item.total);
  //* increment logic
  const increment = (id) => {
    let cartItems = cart;
    let selectedProduct = cartItems.find((item) => item.id === id);
    selectedProduct.count++;
    selectedProduct.total = selectedProduct.count * selectedProduct.price;
    selectedProduct.total = parseFloat(selectedProduct.total.toFixed(2));
    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: cartItems });
    setCount(selectedProduct.count);
    setPrice(selectedProduct.total);
  };
  //* decrement logic
  const decrement = (id) => {
    let cartItems = cart;
    let selectedProduct = cartItems.find((item) => item.id === id);
    selectedProduct.count--;
    if (selectedProduct.count !== 0) {
      selectedProduct.total = selectedProduct.count * selectedProduct.price;
      selectedProduct.total = parseFloat(selectedProduct.total.toFixed(2));
      dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: cartItems });
      setCount(selectedProduct.count);
      setTotal(selectedProduct.total);
    } else {
      dispatch({ type: types.REMOVE_CART_ITEM, payload: selectedProduct.id });
      localStorage.setItem(
        "cart",
        JSON.stringify(cart.filter((item) => item.id !== id))
      );
    }
  };
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-8 gap-4 px-20 mt-6 items-center justify-center text-center ">
      <p className="uppercase font-semibold lg:mr-12   ">
        <img
          src={`${item.image.url}?webp`}
          width="45px"
          className="lg:ml-4 mx-auto"
        />
      </p>
      <p className=" text-sm text-center lg:mr-12 lg:mb-3  ">{item.title}</p>
      <p className=" text-base text-center lg:mr-12 lg:mb-3 pr-4  ">
        {item.price}$
      </p>
      <p className=" text-base text-center lg:mr-12  pr-4 flex  justify-around items-start">
        <BiChevronDown
          className="lg:mt-1 text-lg cursor-pointer hover:text-indigo-600 mx-auto "
          onClick={() => decrement(item.id)}
        />
        <span>{count}</span>
        <BiChevronUp
          className="lg:mt-1 text-lg cursor-pointer hover:text-indigo-600 mx-auto "
          onClick={() => increment(item.id)}
        />
      </p>
      <p className=" text-red-600 text-center lg:lg:mr-12 lg:mb-3 text-lg mx-auto   ">
        <MdDelete
          className="lg:ml-8 mr-4 cursor-pointer"
          onClick={() => {
            dispatch({ type: types.REMOVE_CART_ITEM, payload: item.id });
            localStorage.setItem(
              "cart",
              JSON.stringify(cart.filter((item) => item.id !== id))
            );
          }}
        />
      </p>
      <p className=" text-base text-center lg:mr-12 mb-6 pr-4  ">{total}$</p>
    </div>
  );
};

export default CartItem;
