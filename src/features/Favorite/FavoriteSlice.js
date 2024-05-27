import { createSlice } from "@reduxjs/toolkit";


export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        status: 'idle',
        data: JSON.parse(localStorage.getItem('favorites')) || [],
        error: null
    },

    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.data));
        },

        removeFavorite: (state, action) => {
            state.data = state.data.filter(image => image.id !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.data));
        }
    }
})

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;