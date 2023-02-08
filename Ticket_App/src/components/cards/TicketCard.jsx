import React from 'react'
import { Link } from 'react-router-dom'

function TicketCard({item}) {
    // console.log(item);
  return (
    <div className="ticket">
        <div className='ticket--date'>{new Date(item.createdAt).toLocaleString('en-US')}</div>
        <div className='ticket--product--name'>{item.product}</div>
        <div className={`status status-${item.status}`}>{item.status}</div>
        <Link to={`/tickets/${item._id}`} className='btn btn-reverse btn-sm' id='view'>
            view
        </Link>
    </div>
  
  )
}

export default TicketCard