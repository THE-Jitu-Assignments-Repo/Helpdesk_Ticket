import {
    createSlice
} from "@reduxjs/toolkit"
import { createTicket } from "./ticketActions"

const initialState = {
    ticket: {},
    tickets: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}


export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createTicket.pending, (state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(createTicket.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
        }),
        builder.addCase(createTicket.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer