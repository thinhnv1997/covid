import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:{
      bgColor:"black",
      color:"white"
    }
};

const covid = createSlice({
  name: "globalSlice",
  initialState: initialState,
  reducers: {

  },
});

const { actions, reducer } = covid;
export { actions as CovidAction, reducer as CovidReducer };
