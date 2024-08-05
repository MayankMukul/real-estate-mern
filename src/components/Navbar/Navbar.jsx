import React from 'react'
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className='user'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <Link to="/porfilePage" className='profile'>
            <div className="notification">3</div>
            <span>
            Profile
            </span>
            </Link>
        </div>)
        :(
          <>
          <a href="/" >Sign in</a>
          <a href="/" className='register' >Sign Up</a>
          </>
        )}
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
