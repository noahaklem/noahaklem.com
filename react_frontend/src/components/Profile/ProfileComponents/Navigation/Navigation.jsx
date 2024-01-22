import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'


const Navigation = ({data}) => {
  return (
    <nav className='navigation'>
        <div className='navigation-picture-container'>
            <img src={data[0].images[0].image_data} alt="small profile pics" />
            <h5>{data[0].name}</h5>
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
            <Link to="/" className='switch-profile'><button>Switch Profile</button></Link>
            
        </div>
    </nav>
  )
}

export default Navigation