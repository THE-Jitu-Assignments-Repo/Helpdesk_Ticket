import {
    createSlice
} from "@reduxjs/toolkit";
import {
    loginUser,
    logoutUser,
    RegisterUser
} from "./authActions";

const user = localStorage.getItem('user')

const initialState = {
    user: user? user:null,
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
            builder.addCase(RegisterUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            }),
            builder.addCase(loginUser.pending, (state, action) => {
                state.isLoading = true
            }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.token = localStorage.setItem('token', action.payload.Token)
                state.user = localStorage.setItem('user', action.payload)
            }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.message = action.payload
                state.user=null
            }),
            builder.addCase(logoutUser.fulfilled, (state,action)=>{
                state.user=null
            })
    }
})


export const {reset}  = authSlice.actions

export default authSlice.reducer