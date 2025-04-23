import React, { useEffect, useState } from "react";
import { Outlet, useLocation} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayOut = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);

   
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [location.pathname]);
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-476px)] bg-[#EFEFEF]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-16 xl:px-24 ">
          {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-60">
          <span className="loading loading-dots loading-lg text-blue-600"></span>
        </div>
      )}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayOut;
