import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
  isMenuActive: false,
  error: false,
  success: false
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (state.isMenuActive) {
        state.isMenuActive = false;
      } else {
        state.isMenuActive = true;
      }
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload <= 640;
    },
    setError: (state, action) => {
      if (action.payload.includes("weak-password")) {
        state.error = "Weak password, password must be at least 6 characters"
      }
      else if(action.payload.includes('email-already-in-use')){
        state.error = "Email is already in use, please login or use another email"
      }
      else if(action.payload.includes('wrong-password')){
        state.error = "Wrong password, please check your password again"
      }
      else if(action.payload.includes('user-not-found')){
        state.error = "User not found, please check your email or maybe register?"
      }
      else {
        state.error = action.payload
      }
    },
    setSuccess: (state) => {
      state.success = true;
    },
    resetSuccess: (state) => {
      state.success = false;
    }
  },
});

export const uiActions = UISlice.actions;
export default UISlice.reducer;
