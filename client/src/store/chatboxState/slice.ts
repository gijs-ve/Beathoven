import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { T_ChatboxState, T_Message } from "../../../../types";

const initialState: T_ChatboxState = {
  messages: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<T_Message>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { addMessage } = appSlice.actions;

export default appSlice.reducer;
