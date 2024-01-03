import React from 'react'
import "./Navigation.css"
import SmallProfilePicture from "../../../../assets/SmallProfilePicture.jpg"

const Navigation = () => {
  return (
    <nav className='navigation'>
        <div className='navigation-picture-container'>
            <img src={ SmallProfilePicture } />
        </div>
        <div className='navigation-links-container'>
            <ul>
                <a id="#About"><li>About</li></a>
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