import React from 'react'
import './about.css'
import me2 from'../../Assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className="container about_container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={me2} alt="About Image"/>

        </div>
       </div>
       <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>More than 6 Years of Working</small>        
          </article>
        

          <article className='about_card'>
          <FaUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>30+ WorldWide</small>        
          </article>

          <article className='about_card'>
          <AiTwotoneFolderOpen className='about_icon'/>
          <h5>Project</h5>
          <small>15+ Completed</small>        
          </article>
        </div>
        <p>
        Creative Web Developer dedicated to developing and optimizing interactive 
        ,user-friendly websites. Utilize analytical abilities and a keen eye for detail to 
         develop creative and effective web solutions while effectively working with 
         a team to create a website from the scratch. Excellent time management skill 
         and ability to perform well in team environments.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>



      
    </section>
  )
}

export default about