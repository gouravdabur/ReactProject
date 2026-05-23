// cuponSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discount: 0,
};

const cuponSlice = createSlice({

  name: "cupon",

  initialState,

  reducers: {

    applyCupon: (state, action) => {

      const code =
        action.payload.toUpperCase();

      if (code === "SAVE10") {

        state.discount = 10;

      } else if (
        code === "SAVE20"
      ) {

        state.discount = 20;

      } else {

        state.discount = 0;
      }
    },

    resetCoupon: (state) => {

      state.discount = 0;
    },
  },
});

export const {
  applyCupon,
  resetCoupon
} = cuponSlice.actions;

export default cuponSlice.reducer;