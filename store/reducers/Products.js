import * as types from "../types";
import { items } from "../productData";

const maxPrice = Math.max(...items.map((item) => item.price));
const initialState = {
  cart: [],
  cartItems: 0,
  storeProducts: items,
  filteredProducts: items,
  featuredProducts: [],
  singleProduct: {},
  search: "",
  price: maxPrice,
  max: maxPrice,
  min: 0,
  company: "all",
  shipping: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload,
      };
    case types.ADD_PRODUCT_TO_CART:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
        cartItems: action.payload.length,
      };

    case types.GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case types.GET_CART:
      return {
        ...state,
        cart: action.payload.cart,
        cartItems: action.payload.cartItems,
      };
    case types.CLEAR_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {},
      };
    case types.REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        cartItems: state.cartItems - 1,
      };
    case types.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case types.CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
        cartItems: 0,
      };
    default:
      return state;
  }
};
