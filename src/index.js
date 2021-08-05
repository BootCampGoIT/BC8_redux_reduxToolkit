import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import LanguageHoc from "./components/hoc/LanguageHoc";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LanguageHoc>
        <App />
      </LanguageHoc>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
