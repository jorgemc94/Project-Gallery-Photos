
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetSearchRandomThunk = createAsyncThunk('search/getSearchRandom', async () => {
    try {
        const response = await fetch('https://api.unsplash.com/photos/?per_page=30', {
            headers: {
                'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data
        }
        return false
    } catch (error) {
        console.log(error)
    }
})

export const GetSearchPhotoThunk = createAsyncThunk('search/getSearchPhoto', async (text) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${text}`, {
            headers: {
                'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
            }
        })
        if (response.ok) {
            const dataSearch = await response.json()
            console.log(dataSearch)
            return dataSearch.results
        }
        return false
    } catch (error) {
        console.log (error)
    }
})