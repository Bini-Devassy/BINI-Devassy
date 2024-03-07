import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'



const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BINI</a>
      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; BINI DEVASSY. developed by Bini Devassy-All rights reserved</small>
      </div>

    </footer>
  )
}

export default footer