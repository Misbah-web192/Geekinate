
import React from 'react'
import contact from '../assets/contact.svg'

export const Contact = () => {
    return (
        <>
            <section id='contact' className='   w-full'>
                <div className=" p-10  w-full flex justify-center items-center ">
                    <div  data-aos="fade-up" className=" text-center h-30 w-full">
                        <h2 className='font-sans font- text-4xl leading-normal text-[rgb(22,28,45)]'>Get In Touch!</h2>
                        <p className='text-md tracking-wide pt-5 text-[rgb(137,150,169)]'>We love to talk to the people, listen to their requirements and team up to refine and <span className='text-[rgb(109,199,122)]'> Geekinate</span> their tech needs.</p>
                    </div>


                </div>
               
            <div className=" flex flex-col md:flex-row justify-center items-center gap-30  py-10" >
                <div data-aos="zoom-in" className="  w-100">
                    <img src={contact} alt="" />
                </div>
                <div data-aos="zoom-in" className="bg- border border-gray-100 py-7 rounded-md shadow-md shadow-gray-400 px-5   w-[90%] md:w-110 lg:w-125">
                  <div className=" flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 w-full">
                    <div className=" pt-2  w-[100%] lg:w-55">
                        <label htmlFor="name" className='font-sans text-normal text-[rgb(47,52,67)]'>Your Name <span  className=' text-xl text-[rgb(228,63,82)]'>*</span></label><br />
                        <input className='p-1.5 mt-2 border rounded-sm border-gray-400 w-full ' type="text" placeholder='Name' />
                    </div>
                    <div className="   w-[100%]  lg:w-55">
                         <label htmlFor="email" className='font-sans  text-[rgb(47,52,67)]'>Your Email <span  className=' text-xl  text-[rgb(228,63,82)]'>*</span></label><br />
                        <input className='p-1.5 mt-2  border rounded-sm border-gray-400 w-full ' type="text" placeholder='Email' />
                    </div>
                  </div>
                        <div className=" mt-1  w-full">
                             <label htmlFor="message" className=' font-sans pt-3 text-[rgb(47,52,67)]'>Messsage <span className='text-xl text-[rgb(228,63,82)]'>*</span></label><br />
                             <textarea name="message" placeholder='Message' id="" className='border mt-2  pt-2 pl-2 border-gray-400 rounded-sm w-full h-30 '>

                             </textarea>
                        </div>

                    <div className="  w-full">
                        <button className='text-white w-full mt-3 py-2.5 px-5 font-bold rounded-md shadow-md shadow-[rgb(213,237,219)] bg-[rgb(109,199,122)]'>Send Message</button>
                    </div>
                </div>
            </div>
            </section>
            


        </>
    )
}
