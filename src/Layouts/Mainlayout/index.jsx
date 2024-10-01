import React from "react";
import { Footer, Navbar } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>

      {/* /// All Wrapping Childrens */}
      <div>{children}</div>
      {/* ////// Ending Childrens */}

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
