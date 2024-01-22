import React from 'react'
import "./HeroProfileCard.css"
import { Link } from 'react-router-dom'


const HeroProfileCard = ({id, name, images, url_path }) => {

  const renderImages = images => {
    return images.map( image => {
      return (
        <img src={image.image_data}  alt='new stuff' />
      )
    })
  }

  return (
    <div className='profile-card' id= {id}>
      { renderImages(images) }
      <Link className="button" to={url_path} > <button>{ name }</button> </Link>
    </div>
  )
}

export default HeroProfileCard