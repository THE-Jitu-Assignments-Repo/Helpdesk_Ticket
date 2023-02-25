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
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Chip from "@mui/material/Chip";
import TagFacesSharpIcon from "@mui/icons-material/TagFacesSharp";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import InsertCommentSharpIcon from "@mui/icons-material/InsertCommentSharp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import Alert from "@mui/material/Alert";
import {QRCodeCanvas} from 'qrcode.react';

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

  // window.print(printRef.current);
  const printSection = (e) => {
    e.preventDefault();
    // let mywindow = window.open("", "PRINT", "height=400,width=600");

    // mywindow.document.write(document.getElementById("divid").innerHTML);

    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/

    window.print();
    // mywindow.close();

    // return true;
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
    setNoteText("");
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNote = (e) => {
    e.preventDefault();
    if (!noteText) {
      setErr("Invalid text message");
      openModal();
    } else {
      dispatch(createNote({ noteText, ticketID }));
      closeModal();
    }
  };
  const print = () => {
    window.print();
  };
  return (
    <>
      <div className="main--ticket--div hidden-print">
        <div role="presentation hidden-print" onClick={handleClick}>
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

      <div className="ticket--new" ref={printRef} id="divid">


        <div className="ticket--header">
          {/* <Back url="/tickets" className="back" /> */}
          <h2>
            Product:{" "}
            <span style={{ fontWeight: "lighter" }}>{ticket.product}</span>
          </h2>
          <span className="status--new">
            status:{" "}
            <Chip
              label={`${ticket.status}`}
              color={ticket.status === "new" ? "success" : "error"}
              size="small"
              icon={
                ticket.status === "new" ? (
                  <TagFacesSharpIcon />
                ) : (
                  <SentimentDissatisfiedSharpIcon />
                )
              }
            />
            {/* <p className={`status status-${ticket.status}`}>{ticket.status}</p> */}
          </span>
        </div>
        <section className="ticket--content">
          <div className="ticket--body">
            <span className="details--p">
              <h3>TIcket ID:</h3> {ticket._id}
            </span>
            <hr />
            <span  className="details--p">
              <h3>Date Submitted: </h3>
              {new Date(ticket.createdAt).toLocaleString("en-US")}
            </span>
            <hr />
          </div>
          <div className="ticket-desc">
            <h3>Description of the issue</h3>
            <p>{ticket.description}</p>
          </div>
          <section>
            {/* qrcode generate when print is clicked */}
            <QRCodeCanvas value='https://helpdesk-t.netlify.app/' size={180} className="qrcode"/>

            <p className="qrcode" style={{textAlign: 'center', marginTop: '10px'}}>THANK YOU FOR BELIEVING AND TRUSTING US TO SERVE YOU.</p>
            <div style={{ marginBottom: "20px" }}>
              {ticket.status !== "close" && (
                <Button
                  variant="contained"
                  color="inherit"
                  size="small"
                  className="new-btn hidden-print"
                  onClick={openModal}
                  startIcon={<InsertCommentSharpIcon />}
                >
                  {" "}
                  {/* <FaPlus /> */}
                  Add Note
                </Button>
              )}
            </div>

            {notes.map((note) => {
              return <NoteCard key={note._id} note={note} className='hidden-print'/>;
            })}
          </section>
          <div className="button-fix">
            {ticket.status !== "closed" && (
              <Button
                variant="contained"
                color="inherit"
                size="small"
                className="hidden-print"
                onClick={handleClose}
              >
                <CloseOutlinedIcon />
                Close
              </Button>
            )}

            {/* {ticket.status !== "closed" && (
              <button className="btn-t">
                <FaPenAlt />
                <span className="del">Edit</span>{" "}
              </button>
            )} */}
            <Button
              // className="btn-t btn-del"
              variant="contained"
              color="error"
              size="small"
              className="hidden-print"
              onClick={() => {
                dispatch(DeleteTicket(ticket._id)), navigate("/tickets");
              }}
              startIcon={<DeleteForeverIcon />}
            >
              Delete
            </Button>
          </div>
        </section>
      </div>

      <article className="footer hidden-print">
        <p>Click this button to print your ticket...</p>
        <button className="btn-download hidden-print" onClick={printSection}>
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
        {err ? (
          <Alert severity="error" style={{ marginBottom: "10px" }}>
            {err}!
          </Alert>
        ) : (
          ""
        )}
        <form onSubmit={handleNote}>
          <div className="form-group">
            <textarea
              name="noteText"
              placeholder="Write a note text to the staff..."
              className="form-control"
              value={noteText}
              autoFocus
              onChange={(e) => {
                setNoteText(e.target.value), setErr("");
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              color="inherit"
              size="small"
              startIcon={<ForwardToInboxIcon />}
              // className="btn"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default SingleTicket;
