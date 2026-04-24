import React from 'react'
import team from '../assets/team.svg'
import { CiCircleCheck } from "react-icons/ci";

export const About = () => {
    return (
        <>
            <section id='about' className=' flex flex-col sm:flex-col md:flex-row  pt-40 lg:ml-20  pb-30  lg:gap-0 gap-20 justify-center items-center'>
                <div data-aos="zoom-in"  className="about-1    w-[90%]"><img src={team} alt="team-image" /></div>
                <div className="about-2 px-10 lg:mr-20  w-[90%]">
                    <h2  data-aos="fade-up" className='font-sans font- text-4xl leading-normal text-[rgb(22,28,45)]'>Who we are?</h2>
                    <p  data-aos="fade-up" className='text-md tracking-wide pt-5 text-[rgb(137,150,169)]'>We are a team of geeks that provides exceptional technology solutions to businesses, startups, and enterprises.</p>
                     <p  data-aos="fade-up" className='text-md tracking-wide pt-5 text-[rgb(137,150,169)]'>Our vision is to spread the power of technology across the globe and help businesses grow by delivering innovative software solutions.</p>
                      <p  data-aos="fade-up" className='text-md tracking-wide pt-5 text-[rgb(137,150,169)]'>Following are the top priorities for us at Geekinate with an aim to build long term successful business relationships with our clients.</p>
                      <p  data-aos="fade-left"  className='text-md flex items-center gap-2 tracking-wide  pt-8 text-[rgb(137,150,169)]'><CiCircleCheck className='text-green-600  text-2xl'/>Quality</p>
                      <p  data-aos="fade-left" className='text-md  flex items-center gap-2 tracking-wide  pt-3 text-[rgb(137,150,169)]'><CiCircleCheck className='text-green-600  text-2xl'/>Customer Satisfaction</p>
                      <p  data-aos="fade-left" className='text-md  flex items-center gap-2 tracking-wide  pt-3 text-[rgb(137,150,169)]'><CiCircleCheck className='text-green-600  text-2xl'/>Efficient Communication</p>
                      <p  data-aos="fade-left" className='text-md  flex items-center gap-2 tracking-wide  pt-3 text-[rgb(137,150,169)]'><CiCircleCheck className='text-green-600  text-2xl'/>Professional Services & Support</p>
                </div>
            </section>
        </>
    )
}
