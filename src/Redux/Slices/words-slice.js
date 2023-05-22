import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCategory = createAsyncThunk(
    'words/fetchCategory',
    async () => {
        const response = await axios.get('http://localhost:4444/wordsCategory/getAllCategory')
        return response.data
    }
)


export const fetchWords = createAsyncThunk(
    'words/fetchWords',
    async (category) => {
        const response = await axios.get(`http://localhost:4444/words/getAllWords?category=${category}`)
        return response.data
    }
)


const initialState = {
    categories: null,
    words: null,
    status: 'loading' /* loading, ok, error */
}


const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = 'ok'
        }).addCase(fetchCategory.pending, (state) => {
            state.categories = null;
            state.status = 'loading'
        }).addCase(fetchCategory.rejected, (state) => {
            state.categories = null;
            state.status = 'error'
        }).addCase(fetchWords.fulfilled, (state, action) => {
            state.words = action.payload
            state.status = 'ok'
        })
    }


})


export const {  } = wordsSlice.actions

export default wordsSlice.reducer