import React from 'react'
import Header from '../components/Header'

function Hero({sectionColor}) {

  return (
    <section className={`section ${sectionColor}`} id="hero">
      <Header title="Hero" />
    </section>
  )
}

export default Hero