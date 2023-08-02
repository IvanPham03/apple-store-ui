import React from "react";
import Route from "./components/route/Route";
import { AuthContextProvider } from "auth/AuthContext";

const App = ({ routes }) => {
  return (
    <>
      <div className="w -screen">
        <AuthContextProvider>
          <Route routes={routes} />
        </AuthContextProvider>
      </div>
    </>
  );
};

export default App;
