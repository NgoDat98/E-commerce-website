import { configureStore } from "@reduxjs/toolkit";

import PopupReducer from "./popup";
import CategoryReducer from "./category";
import DetailReducer from "./detail";
import CartReducer from "./cart";

const store = configureStore({
  reducer: {
    popup: PopupReducer,
    category: CategoryReducer,
    detail: DetailReducer,
    cart: CartReducer,
  },
});

export default store;
