import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    async (body) => {
        const response = await axios.post('http://localhost:4444/auth/register', body)
        return response.data
    }
)




export const fetchLogin = createAsyncThunk(
    'users/fetchLogin',
    async (body) => {

        const response = await axios.post('http://localhost:4444/auth/login', body);

        return response.data

    }
);


export const fetchAuthMe = createAsyncThunk(
    'users/fetchAuthMe',
    async () => {

        const token = localStorage.getItem('userToken')
        const response = await axios.get('http://localhost:4444/auth/me', { headers: { Authorization: 'Bearer ' + token } })
        return response.data;

    }
)


const initialState = {
    userInfo: null,
    isAuth: false,
    status: 'loading', /*loading, ok, error */
}


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setMe: (state, action) => {
            state.userInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            if (action.payload.statusCode === 0) {
                state.userInfo = action.payload;
                state.isAuth = true
                state.status = 'ok'
                localStorage.setItem('userToken', action.payload.token)
            }

        }).addCase(fetchLogin.pending, (state) => {
            state.userInfo = null
            state.isAuth = false
            state.status = 'loading'
        }).addCase(fetchLogin.rejected, (state) => {
            state.userInfo = null
            state.isAuth = false
            state.status = 'error'
        }).addCase(fetchAuthMe.fulfilled, (state, action) => {
            if (action.payload.statusCode === 0) {
                state.userInfo = action.payload
                state.isAuth = true
                state.status = 'ok'
                localStorage.setItem('userToken', action.payload.token)
            }

        }).addCase(fetchAuthMe.pending, (state) => {
            state.userInfo = null
            state.isAuth = false
            state.status = 'loading'
        }).addCase(fetchAuthMe.rejected, (state) => {
            state.userInfo = null
            state.isAuth = false
            state.status = 'loading'
        }).addCase(fetchRegister.fulfilled, (state, action) => {
            state.userInfo = action.payload
            state.isAuth = true
            state.status = 'ok'
            localStorage.setItem('userToken', action.payload.token)
        })
    }
})


export const { setIsAuth, setMe } = userSlice.actions

export default userSlice.reducer