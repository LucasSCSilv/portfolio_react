import React from 'react'
import CV from '../../assets/cv.pdf'
import {i18n} from '../translate/i18n'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>{i18n.t('CTA.downloadCV')}</a>
        <a href="#contact" className='btn btn-primary'>{i18n.t('CTA.letsTalk')}</a>
    </div>
  )
}

export default CTA