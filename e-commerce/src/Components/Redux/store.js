import { configureStore } from "@reduxjs/toolkit";
import { authSlice, nameSlice } from "./Auth/auth";
import { discountSlice, itemSlice, priceSlice } from "./Cart/cart";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    name: nameSlice.reducer,
    ItemNo: itemSlice.reducer,
    price: priceSlice.reducer,
    Discount: discountSlice.reducer,
  },
});

export { store };
