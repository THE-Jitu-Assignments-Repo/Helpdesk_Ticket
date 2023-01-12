import {
    createSlice
} from "@reduxjs/toolkit";
import {
    loginUser,
    RegisterUser
} from "./authActions";

const initialState = {
    user: false,
    token: null,
    isError: null,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
            state.isError = false,
            state.isLoading = false,
            state.isSuccess = false,
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(RegisterUser.pending, (state, action) => {
                state.isLoading = true
            }),
            builder.addCase(RegisterUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.token = localStorage.setItem('token', action.payload.token)
                state.user = true
            }),
            builder.addCase(RegisterUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.message = action.payload
            })
    }
})


export const {reset}  = authSlice.actions

export default authSlice.reducer