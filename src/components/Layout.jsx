import React from "react";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Global from "./global";
import App from "../App";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
