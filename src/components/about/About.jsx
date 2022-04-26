import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { i18n } from '../translate/i18n'

const About = () => {
  return (
    <section id='about'>
      <h5>{i18n.t('about.knowMore')}</h5>
      <h2>{i18n.t('about.aboutMe')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>{i18n.t('about.experience')}</h5>
              <small>{i18n.t('about.experienceYears')}</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article> */}
          </div>

          <p>
            {i18n.t('about.messageAboutMe')}
          </p>

          <a href="#contact" className='btn btn-primary'>{i18n.t('about.sendMeAMessage')}</a>
        </div>
      </div>
    </section>
  )
}

export default About