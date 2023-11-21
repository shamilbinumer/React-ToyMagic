import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>

<div className="footer-section">
    <div className="social-links">
      <i className="fa fa-facebook" aria-hidden="true"></i>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-youtube" aria-hidden="true"></i>
    </div>
    <div className="footer-details">
      <div className="footer-one">

        
        <h5>ABOUT US</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
      </div>
      <div className="footer-two">
        <h5>Newsletter</h5>
        <div><input type="email" placeholder="Enter Your Email" /></div>
        <button>SUBSCRIBE</button>
      </div>
      <div className="footer-three">
        <h5>NEED HELP</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
      </div>
      <div className="footer-four">
        <h5>CONTACT US</h5>
        <div><a href=""><i className="fa fa-map-marker" aria-hidden="true"></i><span>Gb road 123 london Uk</span></a></div>
        <div><a href=""><i className="fa fa-phone" aria-hidden="true"></i><span>+01 12345678901</span></a></div>
        <div><a href=""><i className="fa fa-envelope" aria-hidden="true"></i><span>demo@gmail.com</span></a></div>
      </div>
    </div>

    <div className="ul"></div>
    <p className="cpy-rgt">© 2023 All Rights Reserved By Free Html Templates</p>
</div>
    </div>
  )
}

export default Footer
