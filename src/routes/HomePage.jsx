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
              <h4>year of experence</h4>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h4>Award and gain</h4>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h4>Property Ready</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./public/images/home_bg.svg" alt="background Image" />
      </div>
    </div>
  );
}
