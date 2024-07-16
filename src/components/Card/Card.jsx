import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(item) {
  return (
    <div className='card'>
      <Link className='imageContainer' to={`/${item.id}`} >
      <img src="/sample-room.jpg" alt="Sample Image" />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/sample-room.jpg" alt="sampleAddressImg" />
          <span>{item.address}</span>
        </p>
        <p className='price'>₹{item.price}</p>
        <div className='bottom'>
          <div className="features">
            <div className="feature">
              <img src="/bed.jpg" alt="Bedroom" />
              <span>{item.bedroom} Bedroom</span>
            </div>
            <div className="feature">
              <img src="/bathroom.jpg" alt="bathroom" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.jpg" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.jpg" alt="Chat" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
