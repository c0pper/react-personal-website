import React from 'react'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import testimonials from "../data/website_testimonial.json"

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Header title="Testimonials" />
      <div className="section-content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials