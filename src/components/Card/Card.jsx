import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(item) {
  return (
    <div className='card'>
      <Link className='imageContainer' to={`/${item.id}`} >
      <img src="./sample-room.jpg" alt="Sample Image" />
      </Link>
      <div className='textContainer'>

      </div>
    </div>
  )
}
