import { createSlice } from "@reduxjs/toolkit";

import { T_AppState } from "../../../../types";

const initialState: T_AppState = {
  chatboxOpen: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleChatboxOpen: (state) => {
      state.chatboxOpen = !state.chatboxOpen;
    },
  },
});

export const { toggleChatboxOpen } = appSlice.actions;

export default appSlice.reducer;
