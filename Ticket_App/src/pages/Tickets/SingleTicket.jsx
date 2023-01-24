import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  closeTicket,
  getSingleTicket,
} from "../../features/Tickets/ticketActions";
import Spinner from "../../components/spinner/Spinner";
import Back from "../../components/backButton/Back";
import { useNavigate } from "react-router-dom";
import { createNote, getNotes } from "../../features/note/noteActions";
import NoteCard from "../../components/cards/noteCard";
import Modal from "react-modal";
import customStyles from "./CustomStyles";
import { FaPen, FaPenAlt, FaPlus, FaTrashAlt, FaWindowClose } from "react-icons/fa";

Modal.setAppElement("#root");

function SingleTicket() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const { ticket, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.ticket
  );
  const { notes, isLoading: noteLoading } = useSelector((state) => state.notes);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <div className="ticket--new">
        <div className="ticket--header">
    <Back url="/tickets" className="back" />
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

           {ticket.status !== 'closed' && <button className="btn-t"><FaPenAlt /><span className="del">Edit</span> </button>}
            <button className="btn-t btn-del"><FaTrashAlt/><span className="del">Delete</span></button>
          </div>

        </section>
      </div>

      <article className="footer">
        <p>Click this button to download your ticket...</p>
        <button className="btn-download">Download Ticket</button>
      </article>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <div className="note-head">
          <h2>Add Note</h2>
          <button className="btn-close-tag" onClick={closeModal}>
            <FaWindowClose size={20} />
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
