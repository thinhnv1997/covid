import { combineReducers } from "redux";
import { CovidReducer } from "./slices/covidSlice";
import { NewsReducer } from "./slices/newsSlice";

const rootReducer = combineReducers({
  CovidReducer,
  NewsReducer,
});

export default rootReducer;
