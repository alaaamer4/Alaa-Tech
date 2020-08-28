import Layout from "../components/utils/Layout";
import Hero from "../components/utils/Hero";
import Services from "../components/utils/Services";
import Featured from "../components/utils/Featured";
import img from "../images/mainBcg.jpeg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as types from "../store/types";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.CLEAR_SINGLE_PRODUCT });
  });
  return (
    <Layout>
      <Hero
        title={"awesome Products awesome Prices"}
        max={true}
        img={img}
        link={{ name: "our products", path: "/products" }}
      />
      <Services />
      <Featured />
    </Layout>
  );
}
