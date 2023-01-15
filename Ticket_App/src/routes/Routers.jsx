import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Index from "../components/Layout/Index";
import Home from "../pages/home/Home";
import NewTicket from "../pages/Tickets/NewTicket";
import Private from "../components/Layout/Guard/Private";
import Ticket from "../pages/Tickets/Ticket";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/newTicket"
          element={
            <Private>
              <NewTicket />
            </Private>
          }
        />

        <Route
          path="/tickets"
          element={
            <Private>
              <Ticket />
            </Private>
          }
        />
      </Route>
    </Routes>
  );
}

export default Routers;
