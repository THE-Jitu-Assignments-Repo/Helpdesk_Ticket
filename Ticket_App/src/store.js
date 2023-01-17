import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './features/Auth/authSlice'
import noteSlice from './features/note/noteSlice'
import ticketSlice from './features/Tickets/ticketSlice'

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice,
        ticket: ticketSlice,
        notes: noteSlice
    })
})