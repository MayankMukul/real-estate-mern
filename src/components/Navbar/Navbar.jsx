import React from 'react'
import './navbar.scss';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // console.log(open)
  return (
    <nav>
      <div className="left">
        <a href="/" className='logo'>
          <img src="./images/logo.svg" alt="logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/" >Sign in</a>
        <a href="/" className='register' >Sign Up</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="menu" onClick={()=>{setOpen((prev)=>!prev)}} />
        </div>
        <div className={open ?"menu active":"menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
        <a href="/">Sigh In</a>
        <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
