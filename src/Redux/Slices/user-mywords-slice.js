import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




export const fetchUserWordsList = createAsyncThunk(
    'userMyWords/fetchUserWordsList',
    async () => {
        const token = localStorage.getItem('userToken')
        const response = await axios.get('http://localhost:4444/user/getUserWordsList', { headers: { Authorization: 'Bearer ' + token } })
        return response.data
    }
)



export const addWordToUserWordList = createAsyncThunk(
    'usersMyWords/addWordToUserWordList',
    async (id) => {
        const token = localStorage.getItem('userToken')
        let body = { wordId: id }
        const response = await axios.post('http://localhost:4444/user/addWordToUserWordList', body, { headers: { Authorization: 'Bearer ' + token } })
        return response.data
    }
)







const initialState = {
    userWordsList: null,
    status: 'loading', /*loading, ok, error */
}


const userMyWordsSlice = createSlice({
    name: 'userMyWordsSlice',
    initialState,
    reducers: {
        removeWord: (state, action) => {
            const found = state.userWordsList.find(el => el._id === action.payload)
            if(found){
                state.userWordsList = state.userWordsList.filter(el => el !== found)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addWordToUserWordList.fulfilled, (state, action) => {
            state.userWordsList = action.payload.userWordsList
            state.status = 'ok'
        }).addCase(addWordToUserWordList.pending, (state) => {
            state.userWordsList = null
            state.status = 'loading'
        }).addCase(addWordToUserWordList.rejected, (state) => {
            state.userWordsList = null
            state.status = 'error'
        }).addCase(fetchUserWordsList.fulfilled, (state, action) => {
            state.userWordsList = action.payload
            state.status = 'ok'
        }).addCase(fetchUserWordsList.pending, (state, action) => {
            state.userWordsList = null
            state.status = 'loading'
        }).addCase(fetchUserWordsList.rejected, (state, action) => {
            state.userWordsList = null
            state.status = 'error'
        })
    }
})


export const { removeWord } = userMyWordsSlice.actions

export default userMyWordsSlice.reducer
