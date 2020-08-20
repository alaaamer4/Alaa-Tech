import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import CartBar from "./CartBar";

import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const state = useSelector((state) => state.navbar);
  return (
    <>
      <Navbar />
      <SideBar isOpen={state.sideBarOpen} />
      <CartBar isOpen={state.sideCartOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
