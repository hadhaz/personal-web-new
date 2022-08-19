import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import authReducer from "./auth-slice"
import storyReducer from "./story-slice"

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    story: storyReducer
  },
});

export default store;
