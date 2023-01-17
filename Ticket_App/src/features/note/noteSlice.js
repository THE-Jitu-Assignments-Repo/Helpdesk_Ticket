import {
    createSlice
} from "@reduxjs/toolkit"
import { reset } from "../Auth/authSlice"
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
        builder.addCase(getNote.fulfilled, (state, action) => {

        })
    }
})
export const {reset} = noteSlice.actions

export default noteSlice.reducer