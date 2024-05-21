import { createSlice } from "@reduxjs/toolkit";
import { GetSearchThunk } from "./SearchThunk";

export const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addphoto: (state, action) => {
            state.data.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(GetSearchThunk.pending, (state, action) => {
            state.status = 'pending'
        })

        .addCase(GetSearchThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })

        .addCase(GetSearchThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = ''
        })
    }

})

export const { addphoto } = SearchSlice.actions