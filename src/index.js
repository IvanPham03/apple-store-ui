import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import routes from "./components/route/Routes";
import store from './redux-toolkit/store.js'
import "./index.css";
import App from "./App";
const props = routes; // create route

//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App routes={props} />
    </Router>
   </Provider>
);
