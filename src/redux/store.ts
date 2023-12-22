import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import alertReducer from "./alertSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
