import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalChartData: {},
  globalMapData: {},
  tableData: null,
};

const covid = createSlice({
  name: "covidSlice",
  initialState: initialState,
  reducers: {
    fetchGlobalChartData(state, action) {
      state.globalChartData = action.payload;
    },
    fetchGlobalMapData(state, action) {
      state.globalMapData = action.payload;
    },
    fetchTableData(state, action) {
      state.tableData = action.payload;
    },
  },
});

const { actions, reducer } = covid;
export { actions as CovidAction, reducer as CovidReducer };
