import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Private from "../components/Layout/Guard/Private";
import Index from "../components/Layout/Index";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import NewTicket from "../pages/Tickets/NewTicket";
import Spinner from "../components/spinner/Spinner";
import ErrorPage from "./error-page";

const Ticket = lazy(() => import("../pages/Tickets/Ticket"));
const SingleTicket = lazy(() => import("../pages/Tickets/SingleTicket"));

function Routers() {
  return (
    <Suspense fallback={<Spinner />} >
      <Routes>
        <Route path="/" element={<Index />} errorElement={<ErrorPage />}>
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
          <Route
            path="/tickets/:ticketID"
            element={
              <Private>
                <SingleTicket />
              </Private>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routers;
