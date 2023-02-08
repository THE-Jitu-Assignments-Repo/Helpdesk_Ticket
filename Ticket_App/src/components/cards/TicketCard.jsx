import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function TicketCard({ item }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let date = new Date(item.createdAt);
  let day = date.getDate();
  let month = date.getMonth() + 1; // getMonth returns a zero-based value, so we add 1
  let year = date.getFullYear();
  let displayDate = `${month}/${day}/${year}`;
  // console.log(item);
  return (
    <div className="ticket" onClick={()=>navigate(`/tickets/${item._id}`)}>
      <div className="ticket--date">
        {displayDate}
      </div>
      <div className="ticket--product--name" >{item.product}</div>
      <div className={`status status-${item.status}`}>{item.status}</div>
      <Link
        to={`/tickets/${item._id}`}
        className="btn btn-reverse btn-sm"
        id="view"
      >
        view
      </Link>
    </div>
  );
}

export default TicketCard;
