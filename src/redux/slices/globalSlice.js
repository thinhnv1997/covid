import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:"light"
};

const covid = createSlice({
  name: "globalSlice",
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload
    }
  },
});

const { actions, reducer } = covid;
export { actions as GlobalAction, reducer as GlobalReducer };
