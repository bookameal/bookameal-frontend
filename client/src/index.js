import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetch,
} from "./components/homeuser/ProductSlice";
import { productsApi } from "./components/homeuser/ProductsApi";
import cartReducer from "./components/homeuser/CartSlice";

const store = configureStore({
  //check what we have in state
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
// store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
