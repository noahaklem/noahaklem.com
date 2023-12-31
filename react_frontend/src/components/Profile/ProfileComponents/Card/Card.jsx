import React from 'react'
import "./Card.css"

const Card = ({title, description, imgs, alt}) => {
  const renderImages = (imgs) => {
    return imgs.map( img => {
      return ( 
          <img src={ img } alt= {alt}/> 
        )
    })
  }

  return (
    <section className='about'>
        <div className='about-heading-container'>
            <h3>{title}</h3>
        </div>
        <div className='about-description-container'>
            <p>{description}</p>
        </div>
        {title === 'ABOUT' ? 
          <div className='image-container'>
            <img src={imgs[0]} alt={alt} />
          </div>
            :
          <div className='images-container'>
              { renderImages(imgs) }
          </div>
        }
        
    </section>
  )
}

export default Card