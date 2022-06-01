import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Netflix clone',
    github: 'https://github.com/Abhiwarkar/Netflix-clone',
    demo: 'https://netflix-clone-anikxt.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Amazon 2.0',
    github: 'https://github.com/Abhiwarkar/Amazon-clone',
    demo: 'https://amazon-2-0-anikxt.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recipe list',
    github: '	https://github.com/Abhiwarkar/recipe-list-app ',
    demo: 'http://cooking-with-react-application.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tic tac toe',
    github: 'https://github.com/Abhiwarkar/Tic-tac-toe-',
    demo: 'https://tic-tac-toe-anikxt.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Infographics',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
