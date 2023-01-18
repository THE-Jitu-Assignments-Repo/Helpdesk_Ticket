import {
    createSlice
} from "@reduxjs/toolkit"
import {
    reset
} from "../Auth/authSlice"
import {
  getNotes
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
        builder.addCase(getNotes.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.notes = action.payload
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})
export const {
    reset:noteReset
} = noteSlice.actions

export default noteSlice.reducer