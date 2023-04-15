import { configureStore, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: [1],
  reducers: {
    getAuth: (state, user) => {
      state.push(user.payload);
    },
    getLogout: (state) => {
      state.length = 0;
    },
  },
});

export const nameSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    getName: (state, user) => {
      state.push(user.payload);
    },
    removeName: (state) => {
      state.length = 0;
    },
  },
});

export const { getAuth, getLogout } = authSlice.actions;
export const { getName, removeName } = nameSlice.actions;
