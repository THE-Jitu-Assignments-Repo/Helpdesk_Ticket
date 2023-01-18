import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getNotes = createAsyncThunk(
    "notes/getnotes",
    async (ticketID, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.get(`http://localhost:3002/api/tickets/${ticketID}/notes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            return response.data
        } catch (error) {

            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())

        }
    }
)