import { createSlice } from "@reduxjs/toolkit";
import { loginUser, RegisterUser } from "./authActions";

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
        builder.addCase(RegisterUser.fulfilled, (state,action)=>{
            
        }),
        builder.addCase(loginUser.fulfilled, (state,action)=>{
            
        }),
        builder.addCase(RegisterUser.rejected, (state,action)=>{
            
        }),
         builder.addCase(loginUser.rejected, (state,action)=>{
            
        })
    }
})


export default authSlice.reducer