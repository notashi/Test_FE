import React, { useState } from 'react';

const MovieTime = (props) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleClick = (time) => {
    setSelectedTime(time);
    props.timeData(time)
  };

  const timeOptions = [
    { id: 1, time: '10:00 AM' },
    { id: 2, time: '2:00 PM' },
    { id: 3, time: '4:00 PM' },
    { id: 4, time: '6:00 PM' },
    { id: 5, time: '8:00 PM' },
    { id: 6, time: '10:00 PM' },
  ];

  return (
    <span className='tmkc'>
             
      <span className='tmkb'>
        <h2>Select Movie Time:</h2>
        <span style={{ display: 'flex', gap: 10 }}>
          {timeOptions.map((props) => (
            <button
              key={props.id}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                backgroundColor:
                  selectedTime === props.time ? 'red' : 'lightgray',
                color: selectedTime === props.time ? 'white' : 'black',
                border: 'none',
                outline: 'none',
              }}
              onClick={() => handleClick(props.time)}
            >
              {props.time}
            </button>
          ))}
        </span>
      </span>
           
    </span>
  );
};

export default MovieTime;
