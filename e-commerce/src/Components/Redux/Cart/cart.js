import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "ItemNo",
  initialState: {
    item: 0,
  },
  reducers: {
    getIncItem: (state) => {
      state.item += 1;
    },
    getDecItem: (state) => {
      state.item -= 1;
    },
  },
});

export const priceSlice = createSlice({
  name: "price",
  initialState: {
    amount: 0,
  },
  reducers: {
    getIncPrice: (state, Price) => {
      state.amount += Price.payload;
    },
    getDecPrice: (state, Price) => {
      state.amount -= Price.payload;
    },
  },
});

export const discountSlice = createSlice({
  name: "Discount",
  initialState: {
    offer: 0,
  },
  reducers: {
    getIncDiscount: (state, offers) => {
      state.offer += offers.payload;
    },
    getDecDiscount: (state, offers) => {
      state.offer -= offers.payload;
    },
  },
});

export const { getIncItem, getDecItem } = itemSlice.actions;
export const { getIncPrice, getDecPrice } = priceSlice.actions;
export const { getIncDiscount, getDecDiscount } = discountSlice.actions;
