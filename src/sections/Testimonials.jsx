import React from 'react'
import Header from '../components/Header'
import Testimonial from '../components/TestimonialCard'
import testimonials from "../data/website_testimonial.json"

function Testimonials({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id="testimonials">
      <Header title="Testimonials" />
      <div className="section-content">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials