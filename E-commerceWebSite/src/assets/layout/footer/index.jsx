import React from 'react'
import './index.scss'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="journal">
        <div className="logoFooter">
          <h1>JOURNAL</h1>
        </div>
        <div className="location">
          <i class="fa-solid fa-location-dot"></i> <span>123 Main St.London, UK</span>
        </div>
        <div className="social">
          <i class="fa-brands fa-square-facebook"></i> <span>Facebook</span>
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
          <i class="fa-brands fa-twitter"></i> <span>Twitter</span>
        </div>
      </div>

      <div className="customer">
        <h3>Customer Service</h3>
        <div className="links">
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Contact</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Returns</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Site Map</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Privacy Policy</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Terms & Conditions</NavLink>
        </div>
      </div>

      <div className="account">
        <h3>My Account</h3>
        <div className="links">
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> My Account</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Order History</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Affiliates</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Newsletter</NavLink>
          <NavLink to={'/asdasd'}><i className="fa-solid fa-angle-right"></i> Gift Certificates</NavLink>
        </div>
      </div>

      <div className="newsLetter">
        <h3>Newsletter</h3>
        <p>Stay up to date with news and promotions by signing up for our newsletter</p>

        <div className="inputs">
          <input type="email" placeholder='Your email' />
          <button><i class="fa-regular fa-message"></i> Send</button>
        </div>

        <div className="check">
          <input type="checkbox" />
          <p>I have read and agree to the <Link>Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer