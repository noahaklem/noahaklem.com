import React from 'react'
import './Technologies.css'

const Technologies = ({data}) => {
    const renderTech = (data) => {
        return data[0].projects.map( project => {
            return project.technologies.map( tech => {
                return (
                    <p key={ tech.id } className="technologies-list"> { tech.name.toUpperCase() } </p>     
                )
            })
        })
    }

    return (
        <section className="technologies">
            <h3>TECHNOLOGIES</h3>
            <div className='technologies-list-container'>
                { renderTech(data) }
            </div>
        </section>
    )
}

export default Technologies