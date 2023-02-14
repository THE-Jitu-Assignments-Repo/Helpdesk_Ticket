import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../avatar/Avatar";

function NoteCard({ note }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className="note"
        style={{
          backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#fff",
          color: note.isStaff ? "#fff" : "#000",
        }}
      >
          <Avatar email={note.isStaff? 'S' : user.email} />
        <section>
          <div className="note--header">
            <h4>
              Note from{" "}
              {note.isStaff ? <span>Staff</span> : <span>{user.name} </span>}
            </h4>
            <div className="note-date">
              {new Date(note.createdAt).toLocaleString("en-US")}
            </div>
          </div>
          <p>{note.text}</p>
        </section>
      </div>
    </>
  );
}

export default NoteCard;
