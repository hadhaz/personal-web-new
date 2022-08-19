import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
