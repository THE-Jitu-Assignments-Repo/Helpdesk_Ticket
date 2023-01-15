import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const createTicket = createAsyncThunk(
    "ticket/createTicket",
    async (ticketDetails, {
        dispatch,
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token

            const response = await axios.post('http://localhost:3002/api/tickets', ticketDetails,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log('jjj');
            return response.data

        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())

        }
    }
)

export const getTickets = createAsyncThunk(
    "ticket/getTickets",//all tickets
    async(_,{getState, rejectWithValue})=>{
        try {
            const token = getState().auth.user.Token
            const response = await axios.get('http://localhost:3002/api/tickets', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())
        }
    }
)