import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {i18n} from '../translate/i18n'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ul49jnl', 'template_0ng6kof', form.current, 'MO2Ocwft0xHJ-uOni')
      .then((result) => {
          if(result.text === 'OK'){
            alert('E-mail enviado com sucesso! Em breve entrarei em contato')
          }
      }, (error) => {
          if(error.text) {
            alert('Algo deu errado com o envio do e-mail, me envie uma mensagem via WhatsApp')
          }
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>{i18n.t('contact.getInTouch')}</h5>
      <h2>{i18n.t('contact.contactMe')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lucasscsilv@outlook.com</h5>
            <a href="mailto:lucasscsilv@outlook.com" target="_blank">{i18n.t('contact.sendEmail')}</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (19) 98925-5452</h5>
            <a href="https://api.whatsapp.com/send?phone=+5519989255452" target="_blank">{i18n.t('contact.sendMessage')}</a>
          </article>
        </div>
        {/* FIM DAS OPÇÕES */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={i18n.t('contact.fullName')} required />
          <input type="email" name='email' placeholder={i18n.t('contact.yourEmail')} required />
          <textarea name="message" rows="7" placeholder={i18n.t('contact.yourMessage')} required></textarea>
          <button type='submit' className='btn btn-primary'>{i18n.t('contact.sendMessageEmail')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact