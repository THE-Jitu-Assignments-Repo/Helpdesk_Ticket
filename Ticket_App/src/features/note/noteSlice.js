import {
    createSlice
} from "@reduxjs/toolkit"
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

export default noteSlice.reducer