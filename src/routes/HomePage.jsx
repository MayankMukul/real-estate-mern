import React from 'react';
import './homepage.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Welcome to my portfolio!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            veritatis ipsa rerum dolores vel, a illo iusto doloribus ea labore
            placeat pariatur sed recusandae distinctio saepe veniam sit est
            accusantium.
          </p>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bgsample.jpg" alt="background Image" />
      </div>
    </div>
  );
}
