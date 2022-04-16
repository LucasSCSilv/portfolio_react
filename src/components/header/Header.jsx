import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá me chamo</h5>
        <h1>Lucas</h1>
        <h5 className="text-light">BackEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className="img" src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'> Arraste para baixo </a>

      </div>
    </header>

  )
}

export default Header