import React from 'react'
import profile from '../assets/images.jpeg'
import './style.css';

 function Profile() {
  return (
    <div>
       <div className="upc">
        <div className="gradient"></div>
        <div className="profile-down">
         <img src={profile} alt="Elo Musk" />
         <div className="profile-title">Elon Musk</div>
         <div className="profile-description">
            CEO of Tesla and spaceX
         </div>
        <div className="profile-button"><a href="mailto:elon@musk.com">Contact me!</a></div>
       </div>
       </div>
    </div>
  )
}

export default Profile;