import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu faço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>Banco de Dados</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Modelagem de banco de dados</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de funções e procedures</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de jobs</p>
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
              <p>Criação de Rest Apis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integração com API's</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conexão com múltiplas bases de dados</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Segurança de dados</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementações de regra de negócio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de robôs para automatizações de processos</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOP */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de WebSites responsivos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conexão com API</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tratativa de dados</p>
            </li>
          </ul>
        </article>
        {/* END OF BACK END */}
      </div>
    </section>
  )
}

export default Services