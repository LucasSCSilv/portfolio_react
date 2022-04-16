import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lucas-samuel-8641b0186/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/LucasSCSilv" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials