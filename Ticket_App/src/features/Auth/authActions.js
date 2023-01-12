import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

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