import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h2>What I Offer</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Collaborating with UI/UX designers: Translating design concepts into code.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Implementing UI Components: Creating and styling UI elements like buttons, forms, and menus.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Created wireframes, prototypes,and high-fidelity
                mockups using industry-standard design tools ( Sketch, Figma, Adobe XD).</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Accessibility: Ensuring websites are accessible to individuals with disabilities by following WCAG standards.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>API Integration: Integrating with backend services to fetch and display dynamic data.</p>
            </li>
          </ul>
         </article>
         {/*.................END OF UX/UI............*/}

         <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>HTML, CSS, and JavaScript: Creating the core structure, styling, and functionality of web pages.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Frontend Frameworks: Working with frameworks like React, Angular, or Vue.js for building dynamic user interfaces.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Responsive Web Design: Ensuring websites are visually appealing and functional across different devices.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Cross-Browser Compatibility: Writing code that functions consistently across various web browsers.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Version Control: Managing code changes and collaboration using tools like Git.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Frontend Build Tools: Automating tasks such as code compilation and optimization using tools like Webpack.</p>
            </li>
          </ul>
         </article>

         {/*.................END OF FRONDEND............*/}
         
         <article className='service'>
          <div className="service__head">
            <h3>Collaboration and Continuous Improvement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Cross-Functional Collaboration: Working closely with designers, backend developers, and other team members.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Performance Optimization: Optimizing websites for speed and user experience.</p>
            </li>

            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Continuous Learning: Staying updated with the latest web development trends and technologies.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Documentation: Creating and maintaining clear documentation for code and development processes.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Version Control and Collaboration: Using Git and collaborating effectively within a team.</p>
            </li>
          </ul>
         </article>
          {/*.................END OF Collaboration............*/}


      </div>
    </section>
   
  )
}

export default services