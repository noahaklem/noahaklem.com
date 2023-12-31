import React from 'react'
import "./Navigation.css"
import SmallProfilePicture from "../../../../assets/SmallProfilePicture.jpg"

const Navigation = () => {
  return (
    <nav className='navigation'>
        <div className='navigation-picture-container'>
            <img src={ SmallProfilePicture } alt="small profile pics" />
        </div>
        <div className='navigation-links-container'>
            <ul>
                <li>About</li>
                <li>Technologies</li>
                <li>Testimonials</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className='navigation-button-container'>
            <button>Switch Profile</button>
        </div>
    </nav>
  )
}

export default Navigation