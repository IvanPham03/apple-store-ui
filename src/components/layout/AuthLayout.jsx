import React from "react";
import Navbar from "components/navigation/Navbar";
const AuthLayout = ({ page }) => {
  const Page = page;
  return (
    <>
      <Navbar />
      <div className="grid justify-items-center mb-16">{<Page />}</div>
    </>
  );
};

export default AuthLayout;
