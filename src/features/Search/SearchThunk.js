
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetSearchThunk = createAsyncThunk('search/getSearch', async () => {
    const response = await fetch('https://api.unsplash.com/photos/?per_page=30', {
        headers: {
            'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
        }
    })

    const data = await response.json()
    console.log(data)
    return data
})