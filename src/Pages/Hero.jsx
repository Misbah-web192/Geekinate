import React from 'react'
import startup from '../assets/Startup.svg'

export const Hero = () => {
  return (
    <>
      <section id='hero' className=' flex flex-col sm:flex-col md:flex-row  pt-60 px-10  gap-11 justify-center items-center'>
        <div data-aos="fade-up"  data-aos-easing="ease-in-out"
          className="hero-1  w-[100%] lg:w-145 lg:ml-10  "><h2 className='font-sans font- text-5xl leading-normal text-[rgb(22,28,45)]'>We <span className='text-[rgb(109,199,122)]'> Geekinate</span> solutions for your digital needs</h2>
          <p className='text-lg tracking-wide pt-5 text-[rgb(137,150,169)]'>Geekinate is the process of bringing your digital vision to life with our team of Geeks.</p>
          <button className='text-white mt-5 py-2.5 px-5 font-bold rounded-md shadow-md shadow-[rgb(213,237,219)] bg-[rgb(109,199,122)]' data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out"
          >Let's Connect</button>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out"
          className="hero-2   mx-auto w-[100%] md:w-120"><img src={startup} alt="" /></div>
      </section>
    </>
  )
}
