import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../avatar/Avatar";

function NoteCard({ note }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className="note hidden-print"
        style={{
          backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#fff",
          color: note.isStaff ? "#fff" : "#000",
        }}
      >
        <Avatar email={note.isStaff ? "Staff" : user.name}  co={note.isStaff? " ": "grey"} className='hidden-print'/>
        <section>
          <div className="note--header hidden-print">
            <h4>
              Note from{" "}
              {note.isStaff ? <span>Staff</span> : <span>{user.name} </span>}
            </h4>
            <div className="note-date hidden-print">
              {new Date(note.createdAt).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          <p className="hidden-print">{note.text}</p>
        </section>
      </div>
    </>
  );
}

export default NoteCard;
