import React from "react"
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Lauri Kyttälä</h1>
      <nav>
        <ul>
          <li><Link to="/">Index page</Link></li>
          <li><Link to="/blog" >Blog page </Link></li>
          <li><Link to="/about">About page </Link></li>
          <li><Link to="/contact">Contact page </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header