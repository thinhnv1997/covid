import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

const news = createSlice({
  name: "statesSlice",
  initialState: initialState,
  reducers: {
    
  },
});

const { actions, reducer } = news;
export { actions as NewsAction, reducer as NewsReducer };
