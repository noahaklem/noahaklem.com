import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import './HomePage.css'
import profilePicture from '../../assets/profilePicture.jpg'

const HomePage = () => {
  return (
    <div className='home-page'>
        <section className='home-page-hero'>
            <h1>Tagline for profile.</h1>
            <img src={profilePicture} />
        </section>
        <section className='home-page-cards-container'>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </section>
    </div>
  )
}

export default HomePage