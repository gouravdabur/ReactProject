import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

  name: "cart",

  initialState: [],

  reducers: {

    addToCart: (state, action) => {

      const itemExists =
        state.find(
          (item) =>
            item.id === action.payload.id
        );

      if (itemExists) {

        itemExists.quantity += 1;

      }

      else {

        state.push({
          ...action.payload,
          quantity: 1
        });

      }

    },

    incrementQuantity: (state, action) => {

      const item =
        state.find(
          (i) => i.id === action.payload.id
        );

      if (item) {

        item.quantity += 1;

      }

    },

    decrementQuantity: (state, action) => {

      const item =
        state.find(
          (i) => i.id === action.payload.id
        );

      if (item && item.quantity > 1) {

        item.quantity -= 1;

      }

    },

    removeFromCart: (state, action) => {

      return state.filter(
        (item) =>
          item.id !== action.payload.id
      );

    },

    clearCart: () => {

      return [];

    },

  },

});

export const {

  addToCart,

  incrementQuantity,

  decrementQuantity,

  removeFromCart,

  clearCart

} = cartSlice.actions;

export default cartSlice.reducer;