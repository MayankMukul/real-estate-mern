import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';

export default function SinglePage() {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}></Slider>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.jpg" alt="address" />
                  <span>{singlePostData.address}</span>
                  <div className="price">₹{singlePostData.price}</div>
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}