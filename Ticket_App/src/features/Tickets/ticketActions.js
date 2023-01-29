import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://helpdesk-t-api.onrender.com'

// create a ticket
export const createTicket = createAsyncThunk(
    "ticket/createTicket",
    async (ticketDetails, {
        dispatch,
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token

            const response = await axios.post(baseUrl+'/api/tickets', ticketDetails, {
                headers: {
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


//get all tickets
export const getTickets = createAsyncThunk(
    "ticket/getTickets", //all tickets
    async (_, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.get(baseUrl+'/api/tickets', {
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

//get a single ticket
export const getSingleTicket = createAsyncThunk(
    "ticket/getSingleTicket",
    async (ticketID, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.get(baseUrl+`/api/tickets/${ticketID}`, {
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


export const DeleteTicket = createAsyncThunk(
    "ticket/getSingleTicket",
    async (ticketID, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.delete(baseUrl+`/api/tickets/${ticketID}`, {
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




// update status of a ticket => close
export const closeTicket = createAsyncThunk(
    "ticket/closeTicket",
    async (ticketID, {
        getState,
        rejectWithValue
    }) => {
        try {
            const token = getState().auth.user.Token
            const response = await axios.put(baseUrl+`/api/tickets/${ticketID}`, {
                status: 'closed'
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