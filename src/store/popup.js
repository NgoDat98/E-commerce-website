import { createSlice } from "@reduxjs/toolkit";

const initialPopupState = { popup: null, showPopup: false };

const PopupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    SHOW_POPUP(state, action) {
      state.popup = action.payload;
      state.showPopup = true;
    },
    HIDE_POPUP(state) {
      state.popup = "";
      state.showPopup = false;
    },
  },
});

export const PopupAction = PopupSlice.actions;

export default PopupSlice.reducer;
