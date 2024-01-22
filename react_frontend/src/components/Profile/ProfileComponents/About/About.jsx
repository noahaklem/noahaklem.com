import React from 'react'
import "./About.css"

const About = ({data}) => {
  return (
    <section className='about' >
        <div className='about-heading-container'>
            <h3>{data[0].tagline.toUpperCase()}</h3>
        </div>
        <div className='about-description-container'>
            <p>{data[0].about}</p>
        </div>
        <div className='image-container'>
          {/* {renderImages(images)} */}
        </div>
    </section>

  )
}

export default About