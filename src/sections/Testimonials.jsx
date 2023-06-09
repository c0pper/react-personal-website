import React from 'react'
import Header from '../components/Header'
import Testimonial from '../components/TestimonialCard'
import testimonials from "../data/website_testimonial.json"
import SectionContent from '../components/SectionContent'

function Testimonials({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id="references">
      <Header title="References" />
      <SectionContent>
        <div className="section-content">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </SectionContent>
    </section>
  )
}

export default Testimonials