import {
    createSlice
} from "@reduxjs/toolkit"
import {
    reset
} from "../Auth/authSlice"
import {
    getNote
} from "./noteActions"

const initialState = {
    notes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
export const noteSlice = createSlice({
    name: "notes",
    reducers: {
        reset: (state) => initialState
    },
    initialState,
    extraReducers: builder => {
        builder.addCase(getNote.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getNote.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.notes = action.payload
            })
            .addCase(getNote.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})
export const {
    reset
} = noteSlice.actions

export default noteSlice.reducer