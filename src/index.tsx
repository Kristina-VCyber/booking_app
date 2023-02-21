import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./core/app/App";
import { BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { store } from "./model/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Application = connect((state) => state)(App);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Application />
    </Provider>
  </BrowserRouter>
);
