import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {i18n} from '../translate/i18n'

const Services = () => {
  return (
    <section id='services'>
      <h5>{i18n.t('services.whatIDo')}</h5>
      <h2>{i18n.t('services.services')}</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>{i18n.t('services.dataBase')}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.databaseModeling')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.functionprocedures')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.jobs')}</p>
            </li>
          </ul>
        </article>
        {/* END OF BANCO DE DADOS */}
        <article className="service">
          <div className="service__head">
            <h3>BackEnd</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.restApis')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.integrationApi')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.multipleDataBase')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.security')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.rulesBusiness')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.bots')}</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOP */}
        <article className="service">
          <div className="service__head">
            <h3>{i18n.t('services.webDevelopment')}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.sites')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.conectionApi')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{i18n.t('services.formatingData')}</p>
            </li>
          </ul>
        </article>
        {/* END OF BACK END */}
      </div>
    </section>
  )
}

export default Services