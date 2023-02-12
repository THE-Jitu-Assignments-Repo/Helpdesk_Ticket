import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../features/Tickets/ticketActions";
import { reset } from "../../features/Tickets/ticketSlice";
import Back from "../../components/backButton/Back";
import TicketCard from "../../components/cards/TicketCard";
import Spinner from "../../components/spinner/Spinner";
import "./ticket.css";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { Link as Move } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Ticket() {
  const { tickets, isSucces, isLoading } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  // if (isLoading) {
  //   // return <Spinner />;
  //   return (
  //   <Box sx={{ width: 300 }}>
  //     <Skeleton />
  //     <Skeleton animation="wave" />
  //     <Skeleton animation={false} />
  //   </Box>
  // );
  // }

  return (
    <section className="all-T">
      <div role="presentation" onClick={handleClick} className='breadcrumb--tickets'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            <Move to="/">Home</Move>
          </Link>

          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <ConfirmationNumberIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Tickets
          </Typography>
        </Breadcrumbs>
      </div>
      {/* <Back url="/" className="back" /> */}
      <h1 className="h-ticket">Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>product</div>
          <div>status</div>
        </div>
        <div className="ticket-display">
          {isLoading ? (
            <Box>
              <Skeleton height={60} />
              <Skeleton animation="wave" height={60} />
              <Skeleton animation={false} height={60} />
              <Skeleton height={60} />
              <Skeleton animation="wave" height={60} />
              <Skeleton animation={false} height={60} />
            </Box>
          ) : (
            tickets.map((ticket) => {
              return <TicketCard key={ticket._id} item={ticket} />;
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Ticket;
