import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdPalette } from "react-icons/md";
import { MdLaptopWindows } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

export const Services = () => {
    return (
        <>
            <section id='services' className='flex justify-center items-center bg-[rgb(248,249,252)] pt-20  '>
                <div  data-aos="fade-up" className=" text-center h-30 w-[90%]">
                    <h2 className='font-sans font- text-4xl leading-normal text-[rgb(22,28,45)]'>What we do?</h2>
                    <p className='text-md tracking-wide pt-5 text-[rgb(137,150,169)]'>We are a team of <span className='text-[rgb(109,199,122)]'>Geeks</span> with great expertise</p>
                </div>
            </section>
            <section className='flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row justify-center items-center bg-[rgb(248,249,252)] gap-10 p-10 '>
                <div className="services-childs text-center  w-[90%] lg:w-70">
                    <div className="square rotate-45 h-16 w-16 rounded-md  bg-[rgb(236,244,240)] my-5 mx-auto"><FaUserTie className='-rotate-45  text-[rgb(109,199,122)] text-4xl ml-2 mt-2' />
                    </div>
                    <h2 className='font-sans font- text-xl font-semibold leading-normal text-[rgb(109,199,122)]'>Tech-Consultancy</h2>
                    <p className='text-md tracking-wide pt-3 text-[rgb(137,150,169)]'>We help you research, discover and define the ideal technology solution to your needs.</p>
                </div>
                <div className="services-childs text-center  w[90%] md:70 lg:w-70">
                    <div className="square  rotate-45 h-16 w-16 rounded-md bg-[rgb(236,244,240)] my-5 mx-auto"><MdPalette className='-rotate-45  text-[rgb(109,199,122)] text-4xl ml-2 mt-2' /></div>
                    <h2 className='font-sans font- text-xl font-semibold leading-normal text-[rgb(109,199,122)]'>Design</h2>
                    <p className='text-md tracking-wide pt-3 text-[rgb(137,150,169)]'>We use the industry best practices to design user centric software solutions.</p>
                </div>
                <div className="services-childs text-center md:70  w-[90%] lg:w-70">
                    <div className="square  rotate-45 h-16 w-16 rounded-md bg-[rgb(236,244,240)] my-5 mx-auto"><MdLaptopWindows className='-rotate-45  text-[rgb(109,199,122)] text-4xl ml-2 mt-2' /></div>
                    <h2 className='font-sans font- text-xl font-semibold leading-normal text-[rgb(109,199,122)]'>Development</h2>
                    <p className='text-md tracking-wide pt-3 text-[rgb(137,150,169)]'>We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>
                </div>
                <div className="services-childs text-center  md:70 w-[90%] lg:w-70">
                    <div className="square  rotate-45 h-16 w-16 rounded-md bg-[rgb(236,244,240)] my-5 mx-auto flex items-start justify-start relative"><HiSpeakerphone className='-rotate-45  text-[rgb(109,199,122)] text-4xl ml-2 mt-2' /></div>
                    <h2 className='font-sans font- text-xl font-semibold leading-normal text-[rgb(109,199,122)]'>Digital Marketing</h2>
                    <p className='text-md tracking-wide pt-3 text-[rgb(137,150,169)]'>We help you reach the right audience, build brand loyalty, and drive measurable results.</p>
                </div>
            </section>
        </>
    )
}
