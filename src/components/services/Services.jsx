import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive ui,ux design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile app design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User experience Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Promotional designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ui,ux Design testing</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end Design and Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Portals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterpise and Corporate web Solutions </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Buisness Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration,Continuos Support And Evolution</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Promotion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Guides</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Micrographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Videos</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
