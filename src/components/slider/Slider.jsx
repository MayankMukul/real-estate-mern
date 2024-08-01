import React, { useState } from 'react'
import './slider.scss';

export default function Slider({images}) {
  const [imageIndex, setimageIndex] = useState(null)
  return (
    <div className='silder'>
      { imageIndex !== null && (
      <div className="fullSlider">
        <div className="arrow">
          <img src="./arrow.jpg" alt="leftArrow" onClick={()=>setimageIndex((imageIndex==0)?images.length-1:imageIndex-1)} />
        </div>
        <div className="imageContainer">
          <img src={images[imageIndex]} alt="Image Sample" />
        </div>
        <div className="arrow">
          <img src="./arrow.jpg" className='right' alt="RightArrow" onClick={()=>setimageIndex(imageIndex==images.length-1?0:imageIndex+1)} />
        </div>
        <div className="close" onClick={()=>setimageIndex(null)}>X</div>
      </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="Main Image" onClick={()=>setimageIndex(0)} />
      </div>
      <div className="smallImage">
        {
          images.slice(1).map((image,index)=>{
            return <img src={image} key={index} alt='Images' onClick={()=>setimageIndex(index+1)} />
          })
        }
      </div>
    </div>
  )
}
