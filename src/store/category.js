import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = { category: "" };

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState: initialCategoryState,
  reducers: {
    Iphone(state) {
      state.category = "iphone";
    },
    Ipad(state) {
      state.category = "ipad";
    },
    Macbook(state) {
      state.category = "macbook";
    },
    Airpod(state) {
      state.category = "airpod";
    },
    Watch(state) {
      state.category = "watch";
    },
    Mouse(state) {
      state.category = "mouse";
    },
    Keyboard(state) {
      state.category = "keybord";
    },
    Other(state) {
      state.category = "other";
    },
    All(state) {
      state.category = "";
    },
  },
});

export const CategoryAction = CategorySlice.actions;

export default CategorySlice.reducer;
