import { combineReducers } from "redux";
import { GlobalReducer } from "./slices/globalSlice";
import { CovidReducer } from "./slices/covidSlice";
import { NewsReducer } from "./slices/newsSlice";

const rootReducer = combineReducers({
  GlobalReducer,
  CovidReducer,
  NewsReducer,
});

export default rootReducer;
