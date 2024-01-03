import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-container'>
            <div className='projects-title-container'>
                <h3>Projects</h3>
            </div>
            <div className='project-description-container'>
                <p>Detailed description of project</p>
            </div>
            <div className='project-image-container'>
                <img src='' alt="project one"/>
                <img src='' alt="project two"/>
                <img src='' alt="project three"/>
            </div>
        </div>
        <div className='selected-project-container'>
            <div className='selected-project-image-container'>
                <img src='' alt='selected project image' />
            </div>
            <div className='selected-project-title-container'>
                <h4>Project Title</h4>
            </div>
            <div className='selected-project-description-container'>
                <p>Scope of the project here</p>
            </div>
            <div className='selected-project-technologies-container'>
                <h5>Technology</h5>
                <ul>
                    <li>tech one</li>
                    <li>tech two</li>
                    <li>tech three</li>
                    <li>tech four</li>
                    <li>tech five</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Projects