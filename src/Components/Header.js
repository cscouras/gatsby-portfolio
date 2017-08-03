import React from 'react'
import Link from 'gatsby-link'
import logo from '../media/CS-logo.svg'

const Header = () => (
  <header className="header">
    <div className="header-content">
      <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
      <ul className="nav">
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </header>
)

export default Header
