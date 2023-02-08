import React from "react";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from the options below</p>
      </section>

      <Link to="/newTicket" className="btn btn-reverse btn-block" id="new--ticket--home">
        <FaQuestionCircle />
        <h4>Create New Ticket</h4>
      </Link>
      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> <h4>View my Tickets</h4>
      </Link>
    </div>
  );
}

export default Home;
