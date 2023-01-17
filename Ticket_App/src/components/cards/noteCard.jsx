import React from "react";
import { useSelector } from "react-redux";

function NoteCard({ note }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="note"
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#fff",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
      
    </div>
  );
}

export default NoteCard;
