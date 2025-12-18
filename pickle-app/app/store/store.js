import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import itemsReducer from "./slices/itemSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
  },
});
