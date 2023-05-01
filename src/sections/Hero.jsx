import React from 'react'
import Header from '../components/Header'
import StickySection from '../components/StickySection'

function Hero({sectionColor}) {

  return (
    <StickySection>
      <section className={`section ${sectionColor}`} id="hero">
        <Header title="Hero" />
      </section>
    </StickySection>
  )
}

export default Hero