import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";
import "./index.css";
import App from "./App";

const tagManagerArgs = {
  gtmId: "GTM-P7NB2QX",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
