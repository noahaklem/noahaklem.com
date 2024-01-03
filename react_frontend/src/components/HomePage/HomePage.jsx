import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import './HomePage.css'
import BigProfilePicture from "../../assets/BigProfilePicture.PNG"
import SmallProfilePicture from "../../assets/SmallProfilePicture.jpg"
import Footer from '../Footer/Footer'


const HomePage = () => {

  const profileData = {
    frontend: {
      img: SmallProfilePicture,
      buttonTitle: "SELECT FRONT END",
      path: "/frontend"
    },
    backend: {
      img: SmallProfilePicture,
      buttonTitle: "SELECT BACK END",
      path: "/backend"
    },
    sre: {
      img: SmallProfilePicture,
      buttonTitle: "SELECT SRE",
      path: "/sre"
    }
  }

  const renderProfileCards = (profileData) => {
    const keys = Object.keys(profileData)
    return keys.map( key => {
      return (
        <ProfileCard 
          img={ profileData[key].img }
          title={ profileData[key].buttonTitle }
          path={ profileData[key].path }
        />
      )
    })
  }


  return (
    <div className='home-page'>
        <section className='home-page-hero'>
            <h1>Tagline for profile.</h1>
            <img src={ BigProfilePicture } />
        </section>
        <section className='home-page-cards-container'>
            { renderProfileCards(profileData) }
        </section>
        <footer className='home-page-footer-container'>
          <Footer />
        </footer>
    </div>
  )
}

export default HomePage