import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import ReactDOM from "react-dom/client";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import routes from "./components/route/Routes";
import "./index.css";
import App from "./App";
import reducers from "./redux/reducers";
import saga from "./redux/sagas";

const props = routes; // create route
// Create Redux Store with Middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App routes={props} />
    </Router>
  </Provider>
);
