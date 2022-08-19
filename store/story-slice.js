import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { uiActions } from "./ui-slice";

const story = createSlice({
  name: "story",
  initialState: {
    title: ""
  },
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const postStory = (email, title, story) => {
  return async dispatch => {
    const sendRequest = async () => {
      const name = email.split('@')[0]
      await fetch(
        `https://hadzami-4d96b-default-rtdb.asia-southeast1.firebasedatabase.app/post/${name}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: story,
            date: new Date()
          }),
        }
      );
    };
    try {
      await sendRequest();
      dispatch(uiActions.setSuccess());
    } catch (error) {
      dispatch(uiActions.setError("Failed to post story"));
    }
  };
};

export default story.reducer;
export const storyActions = story.actions;
