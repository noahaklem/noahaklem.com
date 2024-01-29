import React from 'react'
import "./Projects.css"
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectDescriptionCard from './ProjectDescriptionCard/ProjectDescriptionCard'

const Projects = ({data}) => {

    // const findProjectById = (id) => {
    //     return data.projects.filter( project => { project.id ===  id })
    // }
    
    return (
        <section className='projects'>
            <div className='projects-container'>
                <h3>PROJECTS</h3>
                <p> As an experienced Full Stack Software Engineer, my proficiency in frontend development 
                    is a cornerstone of my skill set. I specialize in crafting engaging and user-centric web 
                    applications with a keen focus on creating seamless and intuitive user experiences. 
                    <br />
                    <br />
                    My expertise encompasses a wide array of frontend technologies, including React, 
                    JavaScript (ES6), HTML, and CSS. Leveraging these tools, 
                    I have successfully contributed to the development of robust and scalable frontend 
                    components that enhance the overall usability and aesthetics of web applications.
                </p>
                <div className='projects-card-container'>
                    <ProjectCard data={data}/>
                </div>
            </div>
            <ProjectDescriptionCard data={data} /> 
        </section>
    )
}

export default Projects