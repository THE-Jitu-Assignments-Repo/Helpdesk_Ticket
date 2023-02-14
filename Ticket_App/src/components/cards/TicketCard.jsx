import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';

function TicketCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let date = new Date(item.createdAt);
  let day = date.getDate();
  let month = date.getMonth() + 1; // getMonth returns a zero-based value, so we add 1
  let year = date.getFullYear();
  let displayDate = `${month}/${day}/${year}`;
  // console.log(item);
  return (
    <div className="ticket" onClick={() => navigate(`/tickets/${item._id}`)}>
      <div className="ticket--date">{displayDate}</div>
      <div className="ticket--product--name">{item.product}</div>
      <div>
        <Chip
          label={item.status}
          color={
            item.status == "new"
              ? "success"
              : item.status == "closed"
              ? "error"
              : "primary"
          }
          variant="outlined"
          size="small"
        />
      </div>
      {/* <div className={`status status-${item.status}`}>{item.status}</div> */}
      <div>
        <Tooltip title="view">
        <IconButton aria-label="view" color="default" size="small">
          <OpenInNewIcon /><Link to={`/tickets/${item._id}`}></Link>
        </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default TicketCard;
