import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../features/Tickets/ticketActions";
import { reset } from "../../features/Tickets/ticketSlice";
import Back from "../../components/backButton/Back";
import TicketCard from "../../components/cards/TicketCard";
import Spinner from "../../components/spinner/Spinner";
import "./ticket.css";

function Ticket() {
  const { tickets, isSucces, isLoading } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="all-T">
      <Back url="/" className='back'/>
      <h1 className="h-ticket">Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>product</div>
          <div>status</div>
        </div>
        <div className="ticket-display">

        {tickets.map((ticket) => {
          return <TicketCard key={ticket._id} item={ticket} />;
        })}
        </div>
      </div>
    </section>
  );
}

export default Ticket;
