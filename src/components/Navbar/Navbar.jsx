import React from 'react'
import './navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className='logo'>
          <img src="logo.png" alt="logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/" >Signin</a>
        <a href="/" className='register' >SignUp</a>
      </div>
    </nav>
  );
}
