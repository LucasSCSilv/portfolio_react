import React from 'react'
import CV from '../../assets/cv.pdf'
import CVEN from '../../assets/cven.pdf'
import {i18n} from '../translate/i18n'

let cv;

if(i18n.t('CTA.CV') === 'cv'){
  cv = CV
}else if(i18n.t('CTA.CV') === 'cven'){
  cv = CVEN
}

const CTA = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'>{i18n.t('CTA.downloadCV')}</a>
        <a href="#contact" className='btn btn-primary'>{i18n.t('CTA.letsTalk')}</a>
    </div>
  )
}

export default CTA