import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './features/Auth/authSlice'

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice
    })
})