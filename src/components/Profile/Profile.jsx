import "./Profile.css";
import React, { useState } from "react";

const Details = () => {
   const [user, setUser] = useState({name: "Ankit", email: "ankity2431@gmail.com"})
  return (
    <div className="main-profile-container">
      <h1 className="main-heading">Account Settings</h1>
      <div className="main-content-container">
        <div className="main-profile-details-container">
          <div className="profile-container">
            <img
              src="https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg" // replace with actual profile URL
              alt="Profile"
              className="profile-pic"
            />
            <div className="camera-icon">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="profile-description">
            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </p>
        </div>
      </div>
    </div>
  );
};
export default Details;
