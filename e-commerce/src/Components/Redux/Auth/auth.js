import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getAuth: (state, user) => {
      state.push(user.payload);
    },
    getLogout: (state) => {
      state.length = 0;
    },
  },
});

const nameSlice = createSlice({
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

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    name: nameSlice.reducer,
  },
});

export { store };

export const { getAuth, getLogout } = authSlice.actions;
export const { getName, removeName } = nameSlice.actions;
