import React from 'react';
import List  from '../../components/list/List';
import './profilePage.scss'

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar : <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
            <span>Username : <span className="username">username</span></span>
            <span>Email : <b>johndoe@mail.com</b></span>
          </div>
          <div className="title">
            <h1>List</h1>
            <button>Create New Post</button>
          </div>
          <List></List>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List></List>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}
