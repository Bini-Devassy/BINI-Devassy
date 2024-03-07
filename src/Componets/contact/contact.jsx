import React from 'react'
import './contact.css'
import {ImMail2} from 'react-icons/im'
import {BsMessenger} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aqrcler', 'template_hqee4lp', form.current, 'fpTB_QCw4BvEaKWF8');
     e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <ImMail2 className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>binidevassy@outlook.com</h5>
            <a href="mailto:binidevassy@outlook.com" target="_blank" >Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bini Devassy</h5>
            <a href="https://m.me/bini.devassy.5" target="_blank" >Send A Message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Call Me</h4>
            <h5>+49 1744781518</h5>
          </article>

        </div>
        {/*-----------END OF CONTACT OPTIONS-------*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='YOUR FULL NAME' required />
          <input type="email" name='email' placeholder='YOUR EMAIL' required />
          <textarea name="message" id="" rows='10' placeholder='YOUR MESSAGE' required></textarea>
          <button type='submit' className='btn btn-primary'> Send A Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact