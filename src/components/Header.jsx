import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Header</div>
      <nav className="header-nav">
        <a href="#" className="header-nav-item">Home</a>
        <a href="#" className="header-nav-item">About</a>
        <a href="#" className="header-nav-item">Contact</a>
      </nav>
    </div>
  )
}

export default Header