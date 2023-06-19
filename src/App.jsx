import React from "react";
import Route from "./components/route/Route";

const App = ({ routes }) => {
  return (
    <>
      <div className="w -screen">
        <Route routes={routes} />
      </div>      
    </>
  );
};

export default App;
