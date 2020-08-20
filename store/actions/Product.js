import { items } from "../productData";
import * as types from "../types";

// set store products
const storeProducts = () => (dispatch) => {
  // in case of api calls we would do it here and we would have used async await
  dispatch({ type: types.SET_STORE_PRODUCTS, payload: { items } });
};

// set featured products
const featuredProducts = () => (dispatch) => {
  const featured = items.filter((item) => {
    item.featured === true;
  });
  dispatch({ type: types.SET_FEATURED_PRODUCTS, payload: featured });
};

//
