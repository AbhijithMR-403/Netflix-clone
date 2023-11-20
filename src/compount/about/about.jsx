import React from 'react'
import './about.css'

function About() {
  return (
    <div>
        <section className="link">
      <div className="logos">
        <i className="fab fa-facebook-square fa-2x logo"></i>
        <i className="fab fa-instagram fa-2x logo"></i>
        <i className="fab fa-twitter fa-2x logo"></i>
        <i className="fab fa-youtube fa-2x logo"></i>
      </div>
      <div className="sub-links">
        <ul>
          <li>Audio and Subtitles</li>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
    <footer>
      <p>&copy 1997-2018 Netflix, Inc.</p>
      <p>Carlos Avila &copy 2018</p>
    </footer>
    </div>
  )
}

export default About