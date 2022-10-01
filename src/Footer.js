import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer=()=>{
  return(
          <footer>

<div className="contenthead">

  <h4> About </h4>

  <div className="subheading">

    <ul>
      <li>FAQS</li>
      <li>Privacy Policy</li>
      <li> Pricing, Delivery, Return and Refund Policy</li>
      <li>Terms and Conditions</li>
    </ul>
  </div>
</div>


<div className="contenthead">

  <h4> Help </h4>
  <div className="subheading">
    <ul>
      <li> Contact Us</li>
      <li> About Us</li>
      <li> Pickup Points</li>
    </ul>
  </div>

</div>

<div className="contenthead">

  <h4> Get Social With Us</h4>

  <div className="subheading1">
    <ul>
      <li><Link href="" id="fb" className="footer-social"><i className="fa-brands fa-facebook fa-lg"></i></Link></li>
      <li><Link href="" id="tw" className="footer-social"><i className="fa-brands fa-twitter fa-lg"></i></Link></li>
      <li><Link href="" id="in" className="footer-social"><i className="fa-brands fa-instagram fa-lg"></i></Link></li>
      <li><Link href="" id="in" className="footer-social"><i className="fa-brands fa-youtube-square fa-lg"></i></Link></li>
      </ul>
    </div>
    </div>
    </footer>
    
    
  )
}

export default Footer;