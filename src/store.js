// store.js

import { configureStore } from "@reduxjs/toolkit";

/* CART */
import cartReducer from "./cartSlice";

/* ORDERS */
import ordersReducer from "./ordersSlice";

/* COUPON */
import couponReducer from "./cuponSlice";

export const store = configureStore({

  reducer: {

    cart: cartReducer,

    orders: ordersReducer,

    cuponDetails: couponReducer,
  },
});