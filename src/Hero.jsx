import React from 'react'
import heroImg from './assets/online art.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Banjo same copper mug street art, Brooklyn bitters retro bushwick.Cray coloring book mukbang pop-up tumblr fingerstache subway tile flexitarian cardigan vaporware fixie meh mustache sriracha. Synth
            single-origin coffee beard street art occupy activated charcoal venmo freegan prism butcher.Synth single-origin coffee beard street art occupy activated charcoal venmo freegan prism butcher.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
