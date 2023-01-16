import React from 'react'
import { Link } from 'react-router-dom'

function TicketCard({item}) {
    // console.log(item);
  return (
    <div className="ticket">
        <div>{new Date(item.createdAt).toLocaleString('en-US')}</div>
        <div>{item.product}</div>
        <div className={`status status-${item.status}`}>{item.status}</div>
        <Link to={`/ticket/${item._id}`} className='btn btn-reverse btn-sm'>
            view
        </Link>
    </div>
  
  )
}

export default TicketCard