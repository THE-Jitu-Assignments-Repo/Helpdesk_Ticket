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
import { getNotes } from '../../features/note/noteActions';
import NoteCard from '../../components/cards/noteCard';

function SingleTicket() {
    const {ticket, isLoading, isSuccess, message, isError} = useSelector(state=>state.ticket)
    const {notes, isLoading: noteLoading} = useSelector(state=>state.notes)
    const [err, setErr] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {ticketID} = useParams()

    useEffect(()=>{
        if(isError){
            setErr(message)
        }

        dispatch(getSingleTicket(ticketID))
        dispatch(getNotes(ticketID))
        //eslint-disable-next-line        
    }, [message, isError,ticketID])


    const handleClose = ()=>{
        dispatch(closeTicket(ticketID))
        //include toast
        navigate('/tickets')
    }

    if(isLoading || noteLoading){
        return <Spinner />
    }
    if(isError){
        return <h2>Something went wrong</h2>
    }
  return (
    <div className="ticket-page">
        <header className="ticket-head">
            <Back url='/tickets' className='back' />
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
            <h2>Notes:</h2>
        </header>
        {notes.map(note=>{
            return <NoteCard key={note._id} note={note}/>
        })}

        {ticket.status !== 'closed' &&( <button className='btn-t btn-danger btn-block' onClick={handleClose}>Close Ticket</button>)}
    </div>
  )
}

export default SingleTicket