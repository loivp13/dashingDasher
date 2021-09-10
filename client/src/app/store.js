import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    user: counterReducer,
  },
});
