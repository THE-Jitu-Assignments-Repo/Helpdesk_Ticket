import {
    createAsyncThunk
} from "@reduxjs/toolkit";

export const createTicket = createAsyncThunk(
    "ticket/createTicket",
    async (ticketDetails, {
        dispatch,
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.post('http://localhost:3002/api/ticket', ticketDetails,{
                Headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            return response.data

        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())

        }
    }
)