import React from 'react'
import "./ProfileCard.css"
import SmallProfilePicture from '../../assets/SmallProfilePicture.jpg'

const ProfileCard = ({img, title, path}) => {
  return (
    <div className='profile-card'>
        <img src= { img }/>
        <button>{ title }</button>
    </div>
  )
}

export default ProfileCard