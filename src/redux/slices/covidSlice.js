import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

const covid = createSlice({
  name: "customersSlice",
  initialState: initialState,
  reducers: {
    
  },
});

const { actions, reducer } = covid;
export { actions as CovidAction, reducer as CovidReducer };
