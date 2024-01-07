import React from 'react'
import "./HeroProfileCard.css"

const HeroProfileCard = ({img, title, path}) => {
  return (
    <div className='profile-card'>
        <img src= { img } alt="okay"/>
        <button>{ title }</button>
    </div>
  )
}

export default HeroProfileCard