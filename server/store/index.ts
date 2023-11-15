import { configureStore } from "@reduxjs/toolkit";
import chatboxSliceReducer from "./chatboxState/chatboxSlice";

const store = configureStore({
  reducer: {
    chatboxState: chatboxSliceReducer,
  },
});
export * from "./chatboxState/chatboxSlice";
export default store;
