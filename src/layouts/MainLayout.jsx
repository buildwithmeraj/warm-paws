import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-[3%] py-[1%] md:px-[5%] md:py-[2%]">
        <Outlet />
      </main>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default MainLayout;
