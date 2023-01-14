import {
    createSlice
} from "@reduxjs/toolkit"

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

    }
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer