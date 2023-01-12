import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    user: '',
    token: null,
    errors: null
}

export const registerUser = createAsyncThunk(
    "authUser/registerUser",
    async(userDetails, {rejectWithValue})=>{
        try {
            const response = await axios.post('http://localhost:3002/api/users', userDetails)

            return response.data            
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)
        }

    }
)

export const loginUser = createAsyncThunk(
    "authUser/loginUser",
    async(loginDetails, {rejectWithValue})=>{
        try {
            const response = await axios.post('http://localhost:3002/api/users/login',loginDetails)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)        
        }
    }
)




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