import React from 'react'
import Navigation from './ProfileComponents/Navigation/Navigation'
import About from './ProfileComponents/About/About'
import Technologies from './ProfileComponents/Technologies/Technologies'
import Testimonials from './ProfileComponents/Testimonials/Testimonials'
import Projects from './ProfileComponents/Projects/Projects'

const Profile = () => {
  return (
    <div className='profile'>
        <Navigation />
        <About />
        <Technologies />
        <Testimonials />
        <Projects />
    </div>
  )
}

export default Profile