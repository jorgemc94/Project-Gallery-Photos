
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetSearchRandomThunk = createAsyncThunk('search/getSearchRandom', async () => {
    const response = await fetch('https://api.unsplash.com/photos/?per_page=30', {
        headers: {
            'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
        }
    })

    const data = await response.json()
    return data
})

export const GetSearchPhotoThunk = createAsyncThunk('search/getSearchPhoto', async (text) => {
    const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${text}`, {
        headers: {
            'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
        }
    })

    const dataSearch = await response.json()
    return dataSearch.results
})