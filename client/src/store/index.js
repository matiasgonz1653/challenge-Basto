import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";

const store = configureStore({
    reducer: reducer,
    middleware: [thunk],
    devTools: true,
});

export default store;