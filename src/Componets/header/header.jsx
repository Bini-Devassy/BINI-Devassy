import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/pro.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className=" header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>BINI DEVASSY</h1>
        <h5 className="text-light">Software Tester / Aspring Developer</h5>
        <h2>
  <span>"Frontend Developer with a knack for blending code and</span>
   <span> creativity to craft websites that convert visitors into customers.</span> 
     <span> Passionate about unlocking potential through innovative thinking." </span>
     <span></span>
</h2>
<CTA/>

<HeaderSocials/> 
        
         <div className="me">
          <img src={ME} alt="" />
         </div>

         <a href="#contact" className='scroll_down'>Scroll Down</a>
</div>  

  
    </header>
  )
}

export default header