import { useState } from 'react';
import './layout.scss';
import Navbar from './components/Navbar/Navbar';
import HomePage from './routes/HomePage.jsx';
function App() {
 
  return (
    <div className='layout'>
      <div className="navbar">
      <Navbar></Navbar>
      </div>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  )
}

export default App
