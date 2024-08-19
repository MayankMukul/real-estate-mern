import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';

export default function Card(item) {
  return (
    <div className='card'>
      <Link className='imageContainer' to={`/${item.id}`} >
      <img src="./images/sample-room.jpg" alt="Sample Image" />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="./images/address.jpg" alt="sampleAddressImg" />
          <span>{item.address}</span>
        </p>
        <p className='price'>₹{item.price}</p>
        <div className='bottom'>
          <div className="features">
            <div className="feature">
              <img src="./images/bed.jpg" alt="Bedroom" />
              <span>{item.bedroom} Bedroom</span>
            </div>
            <div className="feature">
              <img src="./images/bathroom.jpg" alt="bathroom" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="./images/save.jpg" alt="save" />
            </div>
            <div className="icon">
              <img src="./images/chat.jpg" alt="Chat" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
