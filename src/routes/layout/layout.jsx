import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function layout() {
  return (
    <div className='layout'>
      <div className="navbar">
      <Navbar></Navbar>
      </div>
      <div className="content">
        
        <Outlet></Outlet>
      </div>
    </div>
  )
}
