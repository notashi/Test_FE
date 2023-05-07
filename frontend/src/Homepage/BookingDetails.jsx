import React from 'react'

function BookingDetails({lastBookingDetails}) {
  const {movie,time,seats}=lastBookingDetails
  


  return (
    <span className='l'>
        <span className='c'>
           {/* {console.log(lastBookingDetails)} */}
           <h3>{`Movie: ${movie}`}</h3>
           <h3>{`Time: ${time}`}</h3>
           <h3>{`Seat: ${seats}`}</h3>
         </span>
    </span>
  )
}

export default BookingDetails