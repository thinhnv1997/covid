import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export default store;