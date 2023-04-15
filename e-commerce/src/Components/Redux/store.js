import { configureStore } from "@reduxjs/toolkit";
import { authSlice, nameSlice } from "./Auth/auth";
import { itemSlice } from "./Cart/cart";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    name: nameSlice.reducer,
    AddData: itemSlice.reducer,
  },
});

export { store };
