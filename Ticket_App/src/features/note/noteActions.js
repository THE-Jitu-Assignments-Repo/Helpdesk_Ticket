import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://helpdesk-t-api.onrender.com'


export const getNotes = createAsyncThunk(
    "notes/getnotes",
    async (ticketID, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.get(baseUrl+`/api/tickets/${ticketID}/notes`, {
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

export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({noteText, ticketID}, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.post(baseUrl+`/api/tickets/${ticketID}/notes`, {
                text: noteText
            }, {
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