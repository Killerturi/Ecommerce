import { createSlice } from "@reduxjs/toolkit";

const ITEMS =
  localStorage.getItem("cartDatas") !== null
    ? JSON.parse(localStorage.getItem("cartDatas"))
    : [];

export const itemSlice = createSlice({
  name: "AddData",
  initialState: {
    cartData: ITEMS,
  },
  reducers: {
    addData: (state, action) => {
      state.cartData = [...state.cartData, { ...action.payload, qty: 1 }];

      localStorage.setItem("cartDatas", JSON.stringify(state.cartData));
    },
    removeItem: (state, action) => {
      state.cartData = state.cartData.filter(
        (val) => val.id !== action.payload
      );
    },
    increseItem: (state, action) => {
      state.cartData = state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty += 1) : item;
      });
    },
    decreseItem: (state, action) => {
      state.cartData = state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty -= 1) : item;
      });
    },
  },
});

export const { addData, removeItem, increseItem, decreseItem } =
  itemSlice.actions;
