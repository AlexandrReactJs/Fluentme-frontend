import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAdminLogin = createAsyncThunk(
    'admin/fetchAdminLogin',
    async (body) => {
        const response = await axios.post('http://localhost:4444/admin/login', body)
        return response.data
    }
)


export const fetchAdminAuthMe = createAsyncThunk(
    'admin/fetchAdminAuthMe',
    async () => {
        const token = localStorage.getItem('adminToken')

        const response = await axios.get('http://localhost:4444/admin/me', { headers: { Authorization: "Bearer " + token } })
        return response.data;
    }
)



const initialState = {
    admin: null,
    isAuth: false,
    status: 'loading',
    token: null
}



const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        exit: (state, action) => {
            state.isAuth = false
            state.admin = null
            state.status = 'ok'
            localStorage.removeItem('adminToken')

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdminLogin.fulfilled, (state, action) => {
            if (action.payload.statusCode === 0) {
                state.admin = action.payload;
                state.isAuth = true
                state.status = 'ok'
                localStorage.setItem('adminToken', action.payload.token)  
            }
        }).addCase(fetchAdminLogin.pending, (state) => {
            state.isAuth = false
            state.admin = null
            state.status = 'loading'
        }).addCase(fetchAdminLogin.rejected, (state) => {
            state.isAuth = false
            state.admin = null
            state.status = 'error'
        }).addCase(fetchAdminAuthMe.fulfilled, (state, action) => {
            if (action.payload.statusCode === 0) {
                state.admin = action.payload;
                state.isAuth = true
                state.status = 'ok'
                localStorage.setItem('adminToken', action.payload.token)  
            }
        }).addCase(fetchAdminAuthMe.pending, (state) => {
            state.isAuth = false
            state.admin = null
            state.status = 'loading'
        }).addCase(fetchAdminAuthMe.rejected, (state) => {
            state.isAuth = false
            state.admin = null
            state.status = 'error'
        })
    }
})




export const { exit } = adminSlice.actions
export default adminSlice.reducer