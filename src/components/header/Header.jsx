import React from 'react'
import './header.css'
import CTA from './CTA'
import img from '../../assets/progamming.gif'
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

        <a href="#contact" className='scroll__down'> Arraste para baixo </a>

      </div>
    </header>

  )
}

function UserLogin() {
  const toggle = document.querySelector('.main-img');
  toggle.classList.toggle('active')

}


export default Header