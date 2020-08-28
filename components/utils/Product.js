import React from "react";
import { items } from "../../store/productData";
import * as types from "../../store/types";
import { GoSearch } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
const Product = ({ info }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //* add product to cart
  const addToCart = async (id) => {
    let cartItems = products.cart;
    let allProducts = products.storeProducts;
    //* check if the item is already in the cart
    let selectedProduct = cartItems.find((item) => item.id === id);
    if (!selectedProduct) {
      //* if it's not in the cart we grab it from the store products
      selectedProduct = allProducts.find((product) => product.id === id);
      let total = selectedProduct.price;
      let cartProduct = { ...selectedProduct, count: 1, total };
      cartItems = [...cartItems, cartProduct];
    } else {
      //* if selected product already in the cart
      selectedProduct.count++;
      selectedProduct.total = selectedProduct.count * selectedProduct.price;
      selectedProduct.total = parseFloat(selectedProduct.total.toFixed(2));
    }
    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: cartItems });
    dispatch({ type: types.OPEN_SIDE_CART });
  };

  return (
    <div className=" card  rounded overflow-hidden shadow-md cursor-pointer hover:shadow-2xl transition-all ease-in-out duration-500  transform hover:-translate-y-5 relative py-4 h-full ">
      <div className="overlay flex items-center justify-center hidden  transition-all ease-in-out duration-500 ">
        <Link
          as={`/product-details-${info.id}`}
          href={`/product?id=${info.id}`}
        >
          <div className="rounded-full p-3 text-white border-2 border-white border-solid text-2xl mx-3  hover:bg-indigo-500 transition-all ease-in-out duration-500 cursor-pointer transform hover:-translate-y-2 ">
            <a>
              <GoSearch />
            </a>
          </div>
        </Link>
        <div
          className="rounded-full p-3 text-white border-2 border-white border-solid text-2xl mx-3  hover:bg-indigo-500 transition-all ease-in-out duration-500 cursor-pointer transform hover:-translate-y-2 "
          onClick={() => {
            addToCart(info.id);
          }}
        >
          <MdAddShoppingCart />
        </div>
      </div>
      <img className="mx-auto" width="240px" src={`${info.image.url}?lqip`} />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">{info.title}</div>
        <p className="text-gray-700 text-base ellipse">{info.description}</p>
        <p className="text-gray-700 text-base mt-2">{info.price} $</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded-full px-4 py-1  font-semibold text-orange-100 mr-2 mb-2">
          {info.company}
        </span>
      </div>
    </div>
  );
};

export default Product;
