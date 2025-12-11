import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return( <>
        
        <nav className="navbar navbar-expand-lg position-sticky z-3 w-100 top-0">
            <div className="container text-light">
                <Link className="navbar-brand text-light" to={'/'}>START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto ">
                    <Link className="nav-link text-light active"  aria-current="page" to={'/about'}>About</Link>
                    <Link className="nav-link text-light" to={'/portfolio'}>Portfolio</Link>
                    <Link className="nav-link text-light" to={'/contact'}>Contact</Link>
                </div>
                </div>
              </div>
            </nav>
        
  </>)
  
}
