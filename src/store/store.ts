import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/Loginapp/loginSlice";

//Reducer

export const store = configureStore({
  reducer: {
    loginApp: loginSlice.reducer,
  },
});
