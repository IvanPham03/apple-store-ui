import React from "react";
import Route from "./components/route/Route";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "auth/AuthContext";
const App = ({ routes }) => {
  return (
    <div className="w -screen">
      {/* <CookiesProvider> */}
        {/* <AuthContextProvider> */}
          <Route routes={routes} />
        {/* </AuthContextProvider> */}
      {/* </CookiesProvider> */}
    </div>
  );
};

export default App;
