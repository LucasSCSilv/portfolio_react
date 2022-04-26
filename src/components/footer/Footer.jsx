import React from 'react'
import './footer.css'
// import {FiInstagram} from 'react-icons/fi'
import {SiLinkedin} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {i18n} from '../translate/i18n'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LUCAS</a>

      <ul className='permalinks'>
        <li><a href="#">{i18n.t('footer.home')}</a></li>
        <li><a href="#about">{i18n.t('footer.about')}</a></li>
        <li><a href="#experience">{i18n.t('footer.experience')}</a></li>
        <li><a href="#services">{i18n.t('footer.services')}</a></li>
        <li><a href="#contact">{i18n.t('footer.contact')}</a></li>
      </ul>

    <div className='footer__socials'>
      {/* <a href="https://instagram.com"><FiInstagram /></a> */}
      <a href="https://github.com/LucasSCSilv"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/lucas-samuel-8641b0186/"><SiLinkedin /></a>
    </div>

    {/* <div className="footer__copyright">
      <small>&copy; Lucas</small>
    </div> */}
    </footer>
  )
}

export default Footer