import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../features/Tickets/ticketActions";
import { reset } from "../../features/Tickets/ticketSlice";
import Back from "../../components/backButton/Back";
import TicketCard from "../../components/cards/TicketCard";


function Ticket() {
  const { tickets, isSucces, isLoading } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  let data = tickets.map(item=>{
    return item._id
  })

  return (
    <>
      <Back url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>product</div>
          <div>status</div>
        </div>
        {data}
        {tickets.map((ticket) => {
         return <TicketCard key={ticket._id} item={ticket}/>;
        })}

        {/* <TicketCard /> */}
      </div>
    </>
  );
}

export default Ticket;
