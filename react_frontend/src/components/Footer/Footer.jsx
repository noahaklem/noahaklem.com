import React from 'react'
import "./Footer.css"
import SmallProfilePicture from "../../assets/SmallProfilePicture.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-name'>
            <img src={ SmallProfilePicture } />
            <h3>Noah A Klem</h3>
        </div>
        <div className='footer-links'>
            <a>Mobile App</a>
            <a>GitHub</a>
            <a>Resume</a>
        </div>
        <div className='footer-thanks'>
            <p>Thank you for visiting!</p>
        </div>
    </div>
  )
}

export default Footer