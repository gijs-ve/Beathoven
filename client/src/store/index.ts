import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import chatboxStateReducer from "./chatboxState/slice";

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    chatboxState: chatboxStateReducer,
  },
});

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppDispatch = typeof store.dispatch;
export * from "./chatboxState";
export default store;
