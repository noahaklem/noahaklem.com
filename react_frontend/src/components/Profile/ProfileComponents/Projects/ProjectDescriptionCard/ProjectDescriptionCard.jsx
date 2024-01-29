import React from 'react'
import './ProjectDescriptionCard.css'

const ProjectsDescriptionCard = ({data}) => {
  
  // const renderImages = images => {
  //   return images.map( image => {
  //     return (
  //       <img key={Math.random()} src={image.image_data} id={image.id} alt={image.id} />
  //     )
  //   })
  // }

  return (
    <div className='project-description-container' >
      <div key={Math.random()} className='project-description-selected-image'>
        <img src="" alt='some text'/>
      </div>
      <div className='project-description-images-container'>
        
      </div>
      <p><em>Scope:</em> </p>
      <p>Descripton goes here</p>
      <div className='project-technologies-container'>
        project-tech-container
      </div>
    </div>
  )
}

export default ProjectsDescriptionCard