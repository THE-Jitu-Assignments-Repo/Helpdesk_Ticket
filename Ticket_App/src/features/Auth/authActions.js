import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const RegisterUser = createAsyncThunk(
    "authUser/registerUser",
    async(userDetails, {rejectWithValue})=>{
        try {
            // console.log(userDetails);
            const response = await axios.post('http://localhost:3002/api/users', userDetails)

            return response.data            
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())
        }

    }
)

export const loginUser = createAsyncThunk(
    "authUser/loginUser",
    async(loginDetails, {rejectWithValue})=>{
        try {
            // console.log(loginDetails);
            const response = await axios.post('http://localhost:3002/api/users/login',loginDetails)

            
            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())        
        }
    }
)