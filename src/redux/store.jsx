import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({//first step to morph reducers into toolkit
    reducer: rootReducer,
});

export default store;
