import React from 'react'
import "./ProfileCard.css"
import profilePicture from "../../assets/profilePicture.jpg"

const ProfileCard = () => {
  return (
    <div className='profile-card'>
        <img src= { profilePicture }/>
        <button>Select</button>
    </div>
  )
}

export default ProfileCard