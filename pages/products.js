import Hero from "../components/utils/Hero";
import AllProducts from "../components/utils/AllProducts";
import Layout from "../components/utils/Layout";
import img from "../images/productsBcg.jpeg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as types from "../store/types";
export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.CLEAR_SINGLE_PRODUCT });
  });
  return (
    <Layout>
      <Hero img={img} />
      <AllProducts />
    </Layout>
  );
}
