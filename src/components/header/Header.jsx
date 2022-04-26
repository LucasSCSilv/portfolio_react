import React, {useState} from 'react'
import './header.css'
import CTA from './CTA'
import img from '../../assets/progamming.gif'
import HeaderSocials from './HeaderSocials'
import {i18n} from '../translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

const handleSelectChange = event => {
  localStorage.setItem(
    I18N_STORAGE_KEY,
    event.target.value
  )
  window.location.reload();
}

const Header = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  return (
    <header>
      <div className='change__language'>
        <select onChange={handleSelectChange} value={language} className='select'>
          <option>{i18n.t('headers.language')}</option>
          <option value="pt-BR" data-icon="glyphicon-music">PT</option>
          <option value="en-US">EN</option>
        </select>
      </div>
      <div className="container header__container">
        <h5>{i18n.t('headers.quemSou')}</h5>
        <h1>Lucas</h1>
        <h5 className="text-light">{i18n.t('headers.profission')}</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img className="img" src={ME} alt="me" />
        </div> */}

        <div id='home' className='container home-container'>
          <div className='logo'>
            <div className="main-img" onClick={UserLogin}>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <img src={img} alt='' />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>{i18n.t('headers.scrollDown')}</a>

      </div>
    </header>

  )
}

function UserLogin() {
  const toggle = document.querySelector('.main-img');
  toggle.classList.toggle('active')

}


export default Header