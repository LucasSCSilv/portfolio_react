import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { i18n } from '../translate/i18n'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>{i18n.t('experience.myKnowledge')}</h5>
      <h2>{i18n.t('experience.myExperience')}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{i18n.t('experience.frontEndDeveloper')}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{i18n.t('experience.htmlLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{i18n.t('experience.cssLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>{i18n.t('experience.reactLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>{i18n.t('experience.bootstrapLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{i18n.t('experience.javascriptLevel')}</small>
              </div>
            </article>
          </div>
        </div>
        {/* FIM DO FRONT */}
        <div className="experience__backend">
          <h3>{i18n.t('experience.backEndDeveloper')}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{i18n.t('experience.nodeJsLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>{i18n.t('experience.mongoDBLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>{i18n.t('experience.csharpLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SqlServer</h4>
                <small className='text-light'>{i18n.t('experience.sqlServerLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>{i18n.t('experience.pythonLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{i18n.t('experience.mySQLLevel')}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Asp Legacy</h4>
                <small className='text-light'>{i18n.t('experience.aspLegacyLevel')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience