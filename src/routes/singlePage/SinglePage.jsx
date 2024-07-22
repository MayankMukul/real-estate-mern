import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData } from '../../lib/dummydata';

export default function SinglePage() {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider></Slider>
          <div className="info">
            <div className="top"></div>
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
