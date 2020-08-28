import React from "react";
import * as types from "../../store/types";
import CartItem from "./CartItem";
import { btnDelete } from "../utils/tailwindutil";
import { useSelector, useDispatch } from "react-redux";
const CartList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  return (
    <div>
      {cart.length !== 0 ? (
        cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          );
        })
      ) : (
        <h1 className="text-4xl font-bold text-center px-20">
          {" "}
          Your Cart Is Empty{" "}
        </h1>
      )}
      {cart.length > 0 && (
        <div className="w-full flex items-center justify-center">
          <button
            className={`${btnDelete}`}
            onClick={() => {
              dispatch({ type: types.CLEAR_CART });
            }}
          >
            Clear Cart{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
