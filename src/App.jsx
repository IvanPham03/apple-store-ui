import React from "react";
import Route from "./components/route/Route";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

const App = ({ routes }) => {
  return (
    <>
      <Navbar />
      <div className="w -screen">
        <Route routes={routes} />
      </div>      
      <Footer />
    </>
  );
};

export default App;
