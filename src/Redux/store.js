import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Slices/user-slice'
import wordsReducer from './Slices/words-slice';
import adminReducer from './Slices/admin-slices/admin-slice';
import adminWrodsReducer from './Slices/admin-slices/admin-words-slice';
import adminCategoriesReducer from './Slices/admin-slices/admin-categories-slice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        words: wordsReducer,
        admin: adminReducer,
        adminWords: adminWrodsReducer,
        adminCategories: adminCategoriesReducer
    }
})