import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import todo from "./reducers";
import { createStore } from "redux";

export const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("upper-view")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
