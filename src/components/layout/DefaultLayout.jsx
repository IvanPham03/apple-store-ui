import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
const DefaultLayout = ({ page }) => {
  const Page = page;
  return (
    <div>
      <Navbar />
      <div className="grid justify-items-center mb-16">
        {<Page />}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
