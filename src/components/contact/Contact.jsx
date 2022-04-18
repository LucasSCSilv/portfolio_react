import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7atqz3j', 'template_0ng6kof', form.current, 'MO2Ocwft0xHJ-uOni')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lucasscsilv@outlook.com</h5>
            <a href="mailto:lucasscsilv@outlook.com" target="_blank">Envie um e-mail</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (19) 98925-5452</h5>
            <a href="https://api.whatsapp.com/send?phone=+5519989255452" target="_blank">Me envie uma mensagem</a>
          </article>
        </div>
        {/* FIM DAS OPÇÕES */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu e-mail' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact