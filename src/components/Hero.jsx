import React from 'react'
import heroImage from '../assets/contact.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Welcome to Contactify</h1>
          <p>Manage and organize your contacts with ease</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Contactify App" />
        </div>
      </div>
    </div>
  )
}

export default Hero