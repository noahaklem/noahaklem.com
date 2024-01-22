import React from 'react'
import "./Footer.css"


const Footer = ({image}) => {
  return (
    <div className='footer'>
        <div className='footer-name'>
            <img src={ image } alt="something meaningful"/>
            <h3>Noah A Klem</h3>
        </div>
        <div className='footer-links'>
            <a href='www.google.com'>Mobile App</a>
            <a href='www.google.com'>GitHub</a>
            <a href='www.google.com'>Resume</a>
        </div>
        <div className='footer-thanks'>
            <p>Thank you for visiting!</p>
        </div>
    </div>
  )
}

export default Footer