import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Back({url}) {
  return (
    <>
    <Link to={url} className='btn btn-reverse btn-back'>
        <FaArrowCircleLeft />Go back
    </Link>
    </>
  )
}

export default Back