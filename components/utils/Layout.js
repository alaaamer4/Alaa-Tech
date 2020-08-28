import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import SideCart from "./SideCart";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const state = useSelector((state) => state.navbar);
  return (
    <>
      <Head>
        <title>Tech Store</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Navbar />
      <SideBar isOpen={state.sideBarOpen} />
      <SideCart isOpen={state.sideCartOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
