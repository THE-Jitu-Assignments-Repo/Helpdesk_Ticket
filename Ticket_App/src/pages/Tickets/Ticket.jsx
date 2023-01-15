import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../features/Tickets/ticketActions";
import { reset } from "../../features/Tickets/ticketSlice";

function Ticket() {
  const { tickets, isSucces, isLoading } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());

    // clear state on unmount retun a func to avoid any render issues
    return () => {
      if (isSucces) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSucces]);

  return <div>Ticket</div>;
}

export default Ticket;
