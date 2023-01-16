import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSingleTicket } from '../../features/Tickets/ticketActions';

function SingleTicket() {
    const {ticket, isLoading, isSuccess, message, isError} = useSelector(state=>state.ticket)
    const [err, setErr] = useState('')
    const dispatch = useDispatch()

    const {ticketID} = useParams()

    useEffect(()=>{
        if(isError){
            setErr(message)
        }

        dispatch(getSingleTicket(ticketID))
    }, [message, isError,ticketID])
  return (
    <div>SingleTicket</div>
  )
}

export default SingleTicket