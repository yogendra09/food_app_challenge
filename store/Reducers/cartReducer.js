import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findIndex = state.cart.findIndex((val) => {
        return val.id === action.payload.id;
      });
      if (findIndex === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[findIndex].quantity += 1;
      }
    },

    updateCart: (state) => {

    },
    removeItem: (state, action) => {
      const findIndex = state.cart.findIndex((val) => {
        return val.id === action.payload.id;
      });
      if (state.cart[findIndex].quantity > 1) {
        state.cart[findIndex].quantity -= 1;
      } else {
        state.cart = state.cart.filter((val) => {
          return val.id !== action.payload.id;
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateCart } = cartReducer.actions;

export default cartReducer.reducer;
