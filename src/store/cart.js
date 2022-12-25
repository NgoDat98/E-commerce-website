import { createSlice } from "@reduxjs/toolkit";

let dataCart;
if (localStorage.getItem("Cart")) {
  dataCart = JSON.parse(localStorage.getItem("Cart"));
} else {
  dataCart = [];
}
let inlitialaCartState;

if (dataCart.length !== undefined) {
  inlitialaCartState = { quantity: {}, showItem: dataCart, delete: "" };
} else {
  inlitialaCartState = { quantity: {}, showItem: [], delete: "" };
}

const CartSlice = createSlice({
  name: "Cart",
  initialState: inlitialaCartState,
  reducers: {
    showCart(state, action) {
      state.quantity = action.payload;
    },

    fixdata(state, action) {
      state.quantity = action.payload;

      let index = state.showItem.findIndex((c) => c.id === state.quantity.id);
      state.showItem.splice(index, 1, state.quantity);
      localStorage.setItem("Cart", JSON.stringify(state.showItem));
    },

    delete(state, action) {
      state.delete = action.payload;
      let xoa = state.showItem.findIndex((c) => c.id === state.delete);
      state.showItem.splice(xoa, 1);
      localStorage.setItem("Cart", JSON.stringify(state.showItem));
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice.reducer;
