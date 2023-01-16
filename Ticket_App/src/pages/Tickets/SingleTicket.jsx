import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { closeTicket, getSingleTicket } from '../../features/Tickets/ticketActions';
import Spinner from '../../components/spinner/Spinner';
import Back from '../../components/backButton/Back';
import { useNavigate } from 'react-router-dom';

function SingleTicket() {
    const {ticket, isLoading, isSuccess, message, isError} = useSelector(state=>state.ticket)
    const [err, setErr] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {ticketID} = useParams()

    useEffect(()=>{
        if(isError){
            setErr(message)
        }

        dispatch(getSingleTicket(ticketID))
        //eslint-disable-next-line        
    }, [message, isError,ticketID])


    const handleClose = ()=>{
        dispatch(closeTicket(ticketID))
        //include toast
        navigate('/tickets')
    }

    if(isLoading){
        return <Spinner />
    }
    if(isError){
        return <h2>Something went wrong</h2>
    }
  return (
    <div className="ticket-page">
        <header className="ticket-head">
            <Back url='/tickets' />
            <h2>
                TIcket ID: {ticket._id}
                <span className={`status status-${ticket.status}`}>{ticket.status}</span>
            </h2>
            <h3>Product: {ticket.product}</h3>
            <h3>
                Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
            </h3>
            <hr />
            <div className="ticket-desc">
                <h3>Description of the issue</h3>
                <p>{ticket.description}</p>
            </div>
        </header>

        {ticket.status !== 'closed' &&( <button className='btn btn-danger btn-block' onClick={handleClose}></button>)}
    </div>
  )
}

export default SingleTicket