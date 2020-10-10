import React from 'react';
import Board from '../components/Board.js';
import logo from '../images/logo.png';
import handleClick from '../components/App.js';

function shoot() {
  alert("Great Shot!");
     
}

const Header = (props) => {
  return(
<div className='center'>
  <img src={logo} className='logo' alt="Girl in a jacket"></img>
  <h1>TIC TAC TOE</h1>
<button className="btn btn-dark niceFont" style={{display : "none" }}>Start</button>
</div>
);
}

export default Header;