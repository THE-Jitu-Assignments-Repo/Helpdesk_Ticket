import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getNote = createAsyncThunk(
    "notes/getnote",
    async (ticketID, {
        getstate,
        rejectWithValue
    }) => {
        try {
            const token = getstate().auth.user.Token
            const response = await axios.get(`http://localhost:3002/api/tickets/${ticketID}/notes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {

            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())

        }
    }
)