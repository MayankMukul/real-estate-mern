import React from 'react'
import './slider.scss';

export default function Slider({images}) {
  return (
    <div className='silder'>
      <div className="fullSlider">
        <div className="arrow">
          <img src="./arrow.jpg" alt="leftArrow" />
        </div>
        <div className="imageContainer"></div>
        <div className="arrow">
          <img src="./arrow.jpg" alt="leftArrow" />
        </div>
      </div>
      <div className="bigImage">
        <img src={images[0]} alt="Main Image" />
      </div>
      <div className="smallImage">
        {
          images.slice(1).map((image,index)=>{
            return <img src={image} key={index} alt='Images'/>
          })
        }
      </div>
    </div>
  )
}
