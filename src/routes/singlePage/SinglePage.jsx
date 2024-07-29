import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';
import Maps from '../../components/map/Maps.jsx';

export default function SinglePage() {
  return (
    <div className="singlePage">
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
                </div>
                <div className="price">₹{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility" alt="Utilities" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet" alt="Pet" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility" alt="Utilities" />
              <div className="featureText">
                <span>Property fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="./size.jpg" alt="Size" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src="./bed.jpg" alt="Beds" />
            <span>2 Beds</span>
          </div>
          <div className="size">
            <img src="./bath.jpg" alt="Bath" />
            <span>2 Bathroom</span>
          </div>
        </div>
        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
            <div className="feature">
              <img src="./school.jpg" alt="School" />
              <div className="featureText">
                <span>School</span>
                <p>2m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./bus" alt="BusStop" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./restaurant" alt="Restaurant" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>

        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Maps items={[singlePostData]}></Maps>
        </div>
        <div className="buttons">
          <button>
            <img src="./message.jpg" alt="Message" />
            Send a Message
          </button>
          <button>
            <img src="./save.jpg" alt="Save" />
            Save the Place
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
