import React from 'react'
import './Profile.css'
import Navigation from './ProfileComponents/Navigation/Navigation'
import About from './ProfileComponents/About/About'
import Technologies from './ProfileComponents/Technologies/Technologies'
import Testimonials from './ProfileComponents/Testimonials/Testimonials'
import Projects from './ProfileComponents/Projects/Projects'
import { useParams } from 'react-router-dom'

const Profile = ({findByParams}) => {

    const profileType = useParams().profile
    const data = findByParams(profileType)

    return (
        <section className='profile'>
            <Navigation data={data} />
            <About data={data} />
            <Technologies data={data} />
            <Testimonials data={data} />
            <Projects data={data} />
        </section>
    )
}

export default Profile