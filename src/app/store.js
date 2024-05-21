import { configureStore } from "@reduxjs/toolkit";
import { SearchSlice } from "../features/Search/SearchSlice";


export const Store = configureStore({
    reducer: {
        search: SearchSlice.reducer
    }
})