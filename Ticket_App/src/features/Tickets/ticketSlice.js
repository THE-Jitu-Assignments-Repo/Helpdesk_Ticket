import {
    createSlice
} from "@reduxjs/toolkit"
import {
    closeTicket,
    createTicket,
    DeleteTicket,
    getSingleTicket,
    getTickets
} from "./ticketActions"

const initialState = {
    ticket: {},
    tickets: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createTicket.pending, (state, action) => {
                state.isLoading = true
            }),
            builder.addCase(createTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            }),
            builder.addCase(createTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            }),
            builder.addCase(getTickets.pending, (state, action) => {
                state.isLoading = true
            }),
            builder.addCase(getTickets.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tickets = action.payload
            }),
            builder.addCase(getTickets.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            }),
            builder.addCase(DeleteTicket.pending, (state, action) => {
                state.isLoading = true
            }),
            builder.addCase(DeleteTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            }),
            builder.addCase(DeleteTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            }),
            // note: to prevent manual refresh for updated status
            builder.addCase(closeTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.tickets.map((ticket) => ticket._id === action.payload._id ? ticket.status = 'closed' : ticket)
            })
    }
})

export const {
    reset
} = ticketSlice.actions
export default ticketSlice.reducer