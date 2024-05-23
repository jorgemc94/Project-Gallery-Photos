import { createSlice } from "@reduxjs/toolkit";
import { GetSearchRandomThunk, GetSearchPhotoThunk } from "./SearchThunk";

export const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },


    extraReducers: (builder) => {
        builder
        .addCase(GetSearchRandomThunk.pending, (state, action) => {
            state.status = 'pending'
        })

        .addCase(GetSearchRandomThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })

        .addCase(GetSearchRandomThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = ''
        })

        .addCase(GetSearchPhotoThunk.pending, (state, action) => {
            state.status = 'pending'
            state.error = false
        })

        .addCase(GetSearchPhotoThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = false
            state.data = action.payload
        })

        .addCase(GetSearchPhotoThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = true
        })
    }

})
