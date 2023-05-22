import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchAdminCategory = createAsyncThunk(
    'admin/words/fetchCategory',
    async () => {
        const response = await axios.get('http://localhost:4444/wordsCategory/getAllCategory')
        return response.data
    }
)


export const fetchAdminWords = createAsyncThunk(
    'admin/words/fetchAdminWords',
    async (category) => {
        const response = await axios.get(`http://localhost:4444/words/getAllWords?category=${category}`)
        return response.data
    }
)







const initialState = {

    categories: null,
    words: null,
    status: 'loading',
    createNewWordData: {
        word: null,
        translate: null,
        category: null,
        usageExample: null
    }
}


const adminWordsSlice = createSlice({
    name: 'adminWordsSlice',
    initialState,
    reducers: {
        setWordName: (state, action) => {
            state.createNewWordData.word = action.payload
        },
        setWordTranslate: (state, action) => {
            state.createNewWordData.translate = action.payload
        },
        setUsageExample: (state, action) => {
            state.createNewWordData.usageExample = action.payload
        },
        setCategory: (state, action) => {
            state.createNewWordData.category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdminCategory.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = 'ok'
        }).addCase(fetchAdminCategory.pending, (state, action) => {
            state.categories = null
            state.status = 'loading'
        }).addCase(fetchAdminCategory.rejected, (state, action) => {
            state.categories = null
            state.status = 'error'
        }).addCase(fetchAdminWords.fulfilled, (state, action) => {
            state.words = action.payload
            state.status = 'ok'
        })
    }
})



export const { setWordName, setWordTranslate, setUsageExample, setCategory } = adminWordsSlice.actions

export default adminWordsSlice.reducer