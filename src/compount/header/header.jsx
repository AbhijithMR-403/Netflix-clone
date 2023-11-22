import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="netflixLogo">
        <i id="logo" href="#home">
            <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo" /></i>
      </div>      
      <nav className="main-nav">                
        <i href="#home">Home</i>
        <i href="#tvShows">TV Shows</i>
        <i href="#movies">Movies</i>
        <i href="#originals">Originals</i>
        <i href="#">Recently Added</i>
        <i target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</i>        
      </nav>
      <nav className="sub-nav">
        <i href="#"><i className="fas fa-search sub-nav-logo"></i></i>
        <i href="#"><i className="fas fa-bell sub-nav-logo"></i></i>
        <i href="#">Account</i>
      </nav> 
    </div>
  )
}

export default Header