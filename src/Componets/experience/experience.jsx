import React from 'react'
import './experience.css'
import {MdLibraryAddCheck} from 'react-icons/md'

const experience = () => {
  return (
    <section id='experience'>
      <h2>What Skills I have</h2>
      <div className="container experience__container">
       <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div><h4>HTML</h4>
          <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div><h4>CSS</h4>
          <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div><h4>JavaScript</h4>
          <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div><h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Angular</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Vue.js</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>TypeScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Node JS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Inermediate</small>
          </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
           <div>
           <h4>React</h4>
          <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>C++</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience_details'>
          <MdLibraryAddCheck className='experience__details-icon'/>
          <div>
          <h4>Mango DB</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
      </div>
      </div>
    </section>
    
  )
}

export default experience