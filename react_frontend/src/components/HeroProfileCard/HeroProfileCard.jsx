import React from 'react'
import "./HeroProfileCard.css"
import { Link } from 'react-router-dom'


const HeroProfileCard = ({id, name, images, url_path }) => {

  const renderImages = images => {
    return images.map( image => {
      return (
        <img id={id} src={image.image_data}  alt='new stuff' />
      )
    })
  }

  return (
    <div className='profile-card' >
      { renderImages(images) }
      <Link to={url_path} > <button className='profile-button'>{name}</button> </Link>
    </div>
  )
}

export default HeroProfileCard