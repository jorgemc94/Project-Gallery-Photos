import { configureStore } from "@reduxjs/toolkit";
import { SearchSlice } from "../features/Search/SearchSlice";
import { FavoriteSlice } from "../features/Favorite/FavoriteSlice";


export const Store = configureStore({
    reducer: {
        search: SearchSlice.reducer,
        favorite: FavoriteSlice.reducer
    }
})