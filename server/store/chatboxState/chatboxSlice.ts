import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { T_ChatboxState, T_Message } from "../../../types";
const initialState: T_ChatboxState = {
  messages: [],
};
const chatboxSlice = createSlice({
  name: "chatboxState",
  initialState,
  reducers: {
    addMesssage: (state, action: PayloadAction<T_Message>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});
export const { addMesssage } = chatboxSlice.actions;

export default chatboxSlice.reducer;
