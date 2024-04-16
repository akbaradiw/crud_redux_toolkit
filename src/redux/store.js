import { configureStore } from "@reduxjs/toolkit";
import addtoReducer from "./features/addtoSlice";

export const store = configureStore({
    reducer: {
        addto: addtoReducer
    }
})