import { createSlice } from "@reduxjs/toolkit";

const inlitialaDetailState = { value: "", showItem: null };

const DetailSlice = createSlice({
  name: "showdetaile",
  initialState: inlitialaDetailState,
  reducers: {
    ShowRelated(state, action) {
      state.value = action.payload;
    },
    ShowDescription(state, action) {
      state.showItem = action.payload;
    },
  },
});

export const DetailAction = DetailSlice.actions;

export default DetailSlice.reducer;
