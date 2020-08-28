import { useEffect } from "react";
import * as types from "../store/types";
import { items } from "../store/productData";
import { useDispatch } from "react-redux";
import "../styles/styles.css";
import "../styles/custom.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const getCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };
  useEffect(() => {
    const cart = getCart();
    const cartItems = cart.length || 0;
    dispatch({ type: types.GET_CART, payload: { cart, cartItems } });
    const featured = items.filter((item) => item.featured === true);
    dispatch({ type: types.SET_FEATURED_PRODUCTS, payload: featured });
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
