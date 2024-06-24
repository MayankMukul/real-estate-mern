import React from 'react';
import './homepage.scss';
import SearchBar from '../components/SearchBar/SearchBar';

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
          <SearchBar></SearchBar>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>year of experence</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award and gain</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bgsample.jpg" alt="background Image" />
      </div>
    </div>
  );
}
