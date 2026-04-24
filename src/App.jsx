import { useState, useEffect } from 'react'

import './App.css'
import { Header } from './Pages/Header'
import { Hero } from './Pages/Hero'
import { Pictures } from './Pages/Pictures'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Partners } from './Pages/Partners'
import { Contact } from './Pages/Contact'
import { Footer } from './Pages/Footer'
import Scroll from './Pages/Scroll'
import Responsive from './Pages/Responsive'
import { Portfolio } from './Pages/Portfolio'
import AOS from 'aos';
import 'aos/dist/aos.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
    useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true,        // sirf 1 dafa animate ho
       
    })
  }, [])

  return (
   
    
     <BrowserRouter>
     <Header />
     
      <Routes>

     <Route path='/' element={
     <>
     <Hero />
     <Pictures />
     <About />
     <Services />
     <Partners />
    
     </>
     }/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/#about' element={<About />}/>
      <Route path='/#services' element={<Services />}/>
      </Routes>
       <Contact />
     <Footer />
     <Scroll />
    
    
    </BrowserRouter>
   
  )
}

export default App
