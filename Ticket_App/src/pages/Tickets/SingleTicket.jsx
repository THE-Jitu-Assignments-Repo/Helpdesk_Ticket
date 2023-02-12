import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  closeTicket,
  DeleteTicket,
  getSingleTicket,
} from "../../features/Tickets/ticketActions";
import Spinner from "../../components/spinner/Spinner";
import Back from "../../components/backButton/Back";
import { useNavigate, Link as Move } from "react-router-dom";
import { createNote, getNotes } from "../../features/note/noteActions";
import NoteCard from "../../components/cards/noteCard";
import Modal from "react-modal";
import customStyles from "./CustomStyles";
import {
  FaPen,
  FaPenAlt,
  FaPlus,
  FaTrashAlt,
  FaWindowClose,
} from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from '@mui/icons-material/Whatshot';
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
// import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
// import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

Modal.setAppElement("#root");

function SingleTicket() {
  const [isOpen, setIsOpen] = useState(false);
  const printRef = useRef(null);
  const [noteText, setNoteText] = useState("");
  const { ticket, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.ticket
  );
  const { notes, isLoading: noteLoading } = useSelector((state) => state.notes);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print(printRef.current);
  };

  const { ticketID } = useParams();

  useEffect(() => {
    if (isError) {
      setErr(message);
    }

    dispatch(getSingleTicket(ticketID));
    dispatch(getNotes(ticketID));
    //eslint-disable-next-line
  }, [message, isError, ticketID]);

  const handleClose = () => {
    dispatch(closeTicket(ticketID));
    //include toast
    navigate("/tickets");
  };

  if (isLoading || noteLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  //open and close modal to add note
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNote = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketID }));
    closeModal();
  };
  return (
    <>
      <div className="main--ticket--div">
        <div role="presentation" onClick={handleClick}>
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
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <ConfirmationNumberIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              <Move to="/tickets">Tickets</Move>
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <ConfirmationNumberOutlinedIcon
                sx={{ mr: 0.5 }}
                fontSize="inherit"
              />
              Ticket
            </Typography>
          </Breadcrumbs>
        </div>
        <section className="ticket--activity"></section>
        <section className="ticket--details"></section>
      </div>
      <div className="ticket--new" ref={printRef}>
        <div className="ticket--header">
          {/* <Back url="/tickets" className="back" /> */}
          <h2>
            Product:{" "}
            <span style={{ fontWeight: "lighter" }}>{ticket.product}</span>
          </h2>
          <span className="status--new">
            status:{" "}
            <p className={`status status-${ticket.status}`}>{ticket.status}</p>
          </span>
        </div>
        <section className="ticket--content">
          <div className="ticket--body">
            <span>
              <h3>TIcket ID:</h3> {ticket._id}
            </span>
            <span>
              <h3>Date Submitted: </h3>
              {new Date(ticket.createdAt).toLocaleString("en-US")}
            </span>
          </div>
          <div className="ticket-desc">
            <h3>Description of the issue</h3>
            <p>{ticket.description}</p>
          </div>
          <section>
            {ticket.status !== "close" && (
              <button className="btn new-btn" onClick={openModal}>
                {" "}
                <FaPlus />
                Add Note
              </button>
            )}

            {notes.map((note) => {
              return <NoteCard key={note._id} note={note} />;
            })}
          </section>
          <div className="button-fix">
            {ticket.status !== "closed" && (
              <button className="btn-t btn-danger" onClick={handleClose}>
                Close Ticket
              </button>
            )}

            {/* {ticket.status !== "closed" && (
              <button className="btn-t">
                <FaPenAlt />
                <span className="del">Edit</span>{" "}
              </button>
            )} */}
            <button
              className="btn-t btn-del"
              onClick={() => {
                dispatch(DeleteTicket(ticket._id)), navigate("/tickets");
              }}
            >
              <FaTrashAlt />
              <span className="del">Delete</span>
            </button>
          </div>
        </section>
      </div>

      <article className="footer">
        <p>Click this button to print your ticket...</p>
        <button className="btn-download" onClick={handlePrint}>
          Print Ticket
        </button>
      </article>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
        id="note--modal"
      >
        <div className="note-head">
          <h2>Add Note</h2>
          <button className="btn-close-tag" onClick={closeModal}>
            <FaWindowClose size={25} />
          </button>
        </div>
        <form onSubmit={handleNote}>
          <div className="form-group">
            <textarea
              name="noteText"
              placeholder="Note text"
              className="form-control"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default SingleTicket;
