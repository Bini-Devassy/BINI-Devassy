import React from 'react'
import About from './Componets/about/about'
import Contact from './Componets/contact/contact'
import Experience from './Componets/experience/experience'
import Footer from './Componets/footer/footer'
import Header from './Componets/header/header'
import Nav from './Componets/nav/nav'
import Services from './Componets/services/services'




const App = () => {
  return (
    <>
     <Header />
     <Nav />
    <About/>
    <Experience />
    <Services />
    <Contact />
    <Footer />

    </>
  )
}

export default App