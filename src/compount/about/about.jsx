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
          <li><div href="#">Audio and Subtitles</div></li>
          <li><div href="#">Audio Description</div></li>
          <li><div href="#">Help Center</div></li>
          <li><div href="#">Gift Cards</div></li>
          <li><div href="#">Media Center</div></li>
          <li><div href="#">Investor Relations</div></li>
          <li><div href="#">Jobs</div></li>
          <li><div href="#">Terms of Use</div></li>
          <li><div href="#">Privacy</div></li>
          <li><div href="#">Legal Notices</div></li>
          <li><div href="#">Corporate Information</div></li>
          <li><div href="#">Contact Us</div></li>
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