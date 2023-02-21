import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import userReducer from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
//configure store here itself
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
