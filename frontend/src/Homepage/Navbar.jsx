import React from 'react';
import logo from '../Homepage/Images/bookmyshow.png';
import './All.css';

function Navbar() {
  return (

    <div  >
      <nav class="navbar navbar-light" id='nav' >
         <a class="navbar-brand" href="/" className='header'>
           <img src={logo} width="400"  class=" align-top" alt="error" />
        </a>
      </nav>

     </div>
  )
}

export default Navbar