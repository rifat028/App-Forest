import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../Components/ScrollTop";

const Root = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Root;
