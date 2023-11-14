import { configureStore } from "@reduxjs/toolkit";

import chatboxStateReducer from "./chatboxState/slice";

const store = configureStore({
  reducer: {
    chatboxState: chatboxStateReducer,
  },
});

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppDispatch = typeof store.dispatch;
export * from "./chatboxState";
export default store;
