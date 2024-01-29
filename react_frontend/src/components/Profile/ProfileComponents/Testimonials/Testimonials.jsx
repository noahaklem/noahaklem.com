import React from "react"
import './Testimonials.css'

const Testimonials = ({data}) => {
    const renderTestimonials = (data) => {
        return data[0].testimonials.map( testimonial => {
            return (
                <div className="testimonial-container" key={testimonial.id} >
                    <p className="review">{testimonial.review}</p>
                    <img src={testimonial.image} alt={testimonial.id} />
                    <p className="reviewer">{testimonial.reviewer}</p>
                </div>
            )
        })
    }

    return (
        <section className="testimonials">
            <h3>TESTIMONIALS</h3>
            <div id="testimonials" className='testimonials-list-container'>
                {renderTestimonials(data)}
            </div>
        </section>
    )
}

export default Testimonials