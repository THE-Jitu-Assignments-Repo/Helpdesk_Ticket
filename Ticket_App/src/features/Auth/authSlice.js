import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

const initialState = {
    user: '',
    token: null,
    isError: null,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'authUser',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(registerUser.fulfilled, (state,action)=>{
            
        }),
        builder.addCase(loginUser.fulfilled, (state,action)=>{
            
        }),
        builder.addCase(registerUser.rejected, (state,action)=>{
            
        }),
         builder.addCase(loginUser.rejected, (state,action)=>{
            
        })
    }
})


export default authSlice.reducer