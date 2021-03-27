import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/Root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});