import React from 'react'
import HeroProfileCard from '../HeroProfileCard/HeroProfileCard'
import './HomePage.css'
import Footer from '../Footer/Footer'
import bigpicture from '../../assets/pictures/BigProfilePicture.PNG'
import smallpicture from '../../assets/pictures/SmallProfilePicture.jpg'


const HomePage = ({data}) => {

  const renderHeroProfileCards = (data) => {
    return data.map( profile => {
      return (
        <HeroProfileCard 
          id= { profile.id }
          name= { profile.name }
          images = { profile.images }
          url_path={ profile.url_path }
        />
      )
    })
  }

  return (
    <div className='home-page'>
        <section className='home-page-hero'>
            <h1>Tagline for profile.</h1>
            <img src= { bigpicture } alt='something meaningful' />
        </section>
        <section className='home-page-cards-container'>
            { renderHeroProfileCards(data) }
        </section>
        <footer className='home-page-footer-container'>
          <Footer image= { smallpicture }/>
        </footer>
    </div>
  )
}

export default HomePage