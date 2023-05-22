import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchAdminCategory = createAsyncThunk(
    'admin/categories/fetchCategory',
    async () => {
        const response = await axios.get('http://localhost:4444/wordsCategory/getAllCategory')
        return response.data
    }
)





const initialState = {
    categories: null,
    status: 'loading',
    createNewCategoryData: {
        name: null,
        engName: null
    }
}


const adminCategorySlice = createSlice({
    name: 'adminCategorySlice',
    initialState,
    reducers: {
        setCategoryName: (state, action) => {
            state.createNewCategoryData.name = action.payload
        },
        setCategoryEngName: (state, action) => {
            state.createNewCategoryData.engName = action.payload
        },
        setNewCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        deleteCategory: (state, action) => {
            const found = state.categories.find(el => el._id === action.payload)
            if(found) {
                state.categories = state.categories.filter(el => el !== found)
            }
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
        })
    }
})



export const { setCategoryName, setCategoryEngName, setNewCategory, deleteCategory} = adminCategorySlice.actions

export default adminCategorySlice.reducer