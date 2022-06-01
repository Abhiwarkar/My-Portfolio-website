import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtar1.jpg'
import AVTR2 from '../../assets/avtar2.jpg'
import AVTR3 from '../../assets/avtar3.jpg'
import AVTR4 from '../../assets/avtar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Matthew Perry',
    review: 'Good Quality Work Always Delivered by Him'
  },
  {
    avatar: AVTR2,
    name: 'Angela Johnson',
    review: 'Animations,Transitions and effects used are really designed in a cool way '
  },
  {
    avatar: AVTR3,
    name: 'Leisha Patt',
    review: 'He is very Experienced and Expert in making websites'
  },
  {
    avatar: AVTR4,
    name: 'Tim Kaps',
    review: 'Quality Work delivered, much better than expected'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
