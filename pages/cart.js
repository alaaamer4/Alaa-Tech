import Hero from "../components/utils/Hero";
import * as types from "../store/types";
import { useEffect } from "react";
import Layout from "../components/utils/Layout";
import img from "../images/store.jpg";
import Cart from "../components/cart/Cart";
import { useDispatch } from "react-redux";
export default function CartPage() {
  useEffect(() => {
    useDispatch({ type: types.CLOSE_SIDE_CART });
  }, []);
  return (
    <Layout>
      <Hero img={img} />
      <Cart />
    </Layout>
  );
}
