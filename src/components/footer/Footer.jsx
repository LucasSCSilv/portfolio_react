import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {SiLinkedin} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LUCAS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

    <div className='footer__socials'>
      <a href="https://instagram.com"><FiInstagram /></a>
      <a href="https://www.linkedin.com/in/lucas-samuel-8641b0186/"><SiLinkedin /></a>
    </div>

    {/* <div className="footer__copyright">
      <small>&copy; Lucas</small>
    </div> */}
    </footer>
  )
}

export default Footer