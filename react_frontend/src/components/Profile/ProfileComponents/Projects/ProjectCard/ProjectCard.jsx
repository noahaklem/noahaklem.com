import React from "react";
import './ProjectCard.css'

const ProjectCard = ({data}) => {
    
    const renderProjects = data => {
        return data[0].projects.map( project => {
            return (
                <div key={Math.random()} id={project.id} className="project-card">
                    <h4>{project.title}</h4>
                    {renderImages(project.images)}
                    <p>{project.scope}</p>
                </div>
            )
        })
    }

    const renderImages = images => {
        const img = images[0].image_data
        return (
            <img className="project-image" src={img} alt=""/>
        )
    }

    return (
        renderProjects(data)
    )
}

export default ProjectCard