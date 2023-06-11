import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";
import routes from './components/route/Routes.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const props = routes;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <App routes={props} />
</Router>
);

