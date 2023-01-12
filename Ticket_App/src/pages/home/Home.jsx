import React from "react";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './home.css'

function Home() {
  return (
    <div className="home">
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from the options below</p>
      </section>

      <Link className="btn btn-reverse btn-block">
        <FaQuestionCircle />
        Create New Ticket
      </Link>
      <Link className="btn btn-block">
        <FaTicketAlt /> View my Tickets
      </Link>
    </div>
  );
}

export default Home;
