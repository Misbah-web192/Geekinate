import React from 'react'
import logo from '../assets/logo.webp'
import us from '../assets/us.svg'
import pak from '../assets/pak.svg'
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";



export const Footer = () => {
  return (
    <>
      <div class="custom-shape-divider-top-1776190353 overflow-x-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
      <section className='bg-[rgb(32,41,66)]  w-full'>

        <div className=" w-[100%]  flex justify-center items-center">
          <div className="  w-full mt-20">
            <div className=" w-45 flex justify-center items-center ml-5  mt-1">
              <img src={logo} alt="logo-image" />
            </div>
          </div>
        </div>

        <div className="  w-full flex-col sm:flex-col md:flex-col lg:flex-row items-start  pt-10 flex   ">
          <div className=" p-1   gap-2 flex flex-col justify-center items-center">
            <div className=" w-[90%]  flex justify-center items-center gap-2 ">
              <div className="h-7 w-9 flex justify-center items-center "> <img src={us} alt="us-image" /></div>
              <h2 className='font-sans w-69  font-bold text-lg leading-normal text-[rgb(173,181,189)] '>USA - Head Office</h2>
            </div>
            <div className="h-15 w-full  flex justify-center items-center gap-2">
              <div className="h-8 w-10 pl-2  ">
                <CiLocationOn className='text-xl text-[rgb(173,181,189)] ' />

              </div>
              <h2 className='font-sans w-69 text-md text-[rgb(173,181,189)]'>172 Woodport Road, Suite A #442, Sparta, New Jersey, 07871, USA.</h2>
            </div>
            <div className=" w-full flex justify-center items-center gap-2">
              <div className="h-8 w-10 flex justify-center items-center  ">
                <LuPhone className='text-[rgb(173,181,189)] ' />
              </div>
              <h2 className='font-sans w-69 text-[rgb(109,187,95)] text-md '>+1 (512) 900-6431</h2>
            </div>
          </div>
          <div className=" h-50 w-87 p-1 gap-2 flex flex-col justify-center items-center">
            <div className="h-15 w-full  flex justify-center items-center gap-2">
              <div className="h-7 w-9 flex justify-center items-center "> <img src={pak} alt="us-image" /></div>
              <h2 className='font-sans w-69  font-bold text-lg leading-normal text-[rgb(173,181,189)] '>Pakistan
              </h2>
            </div>
            <div className="h-15 w-full   flex justify-center items-center gap-2">
              <div className="h-8 w-10 pl-2  ">
                <CiLocationOn className='text-xl text-[rgb(173,181,189)] ' />

              </div>
              <h2 className='font-sans w-69 text-md text-[rgb(173,181,189)]'>Twinhub, 4th Floor, The Interlace, I-8 Markaz, Islamabad</h2>
            </div>
            <div className="h-15 w-full  flex justify-center items-center gap-2">
              <div className="h-8 w-10 flex justify-center items-center  ">
                <LuPhone className='text-[rgb(173,181,189)] ' />
              </div>
              <h2 className='font-sans w-69 text-[rgb(109,187,95)] text-md '>+92 333 5388734</h2>
            </div>
          </div>
          <div className=" h-50 w-87 p-1 gap-2 flex flex-col justify-center items-center">
            <div className="h-15 w-full  pt-3.5">
              <h2 className='font-sans w-69  font-bold text-lg leading-normal text-[rgb(173,181,189)] '>Stay in Touch

              </h2>
            </div>
            <div className="h-15 w-full  flex justify-start items-center mb-15 gap-4"><div className="rounded-sm border border-[rgb(173,181,189)] h-10 w-10 flex justify-center items-center "><LuFacebook  className='text-xl text-[rgb(173,181,189)] '/></div>

              <div className="rounded-sm border border-[rgb(173,181,189)] h-10 w-10 flex justify-center items-center "><FaInstagram className='text-xl text-[rgb(173,181,189)] '/>
              </div>

              <div className="rounded-sm border border-[rgb(173,181,189)] h-10 w-10 flex justify-center items-center "><SlSocialTwitter className='text-xl text-[rgb(173,181,189)] '/>
              </div>

              <div className="rounded-sm border border-[rgb(173,181,189)] h-10 w-10 flex justify-center items-center "><SlSocialLinkedin  className='text-xl text-[rgb(173,181,189)] '/>
              </div>

            </div>
          </div>
        </div>
         <hr className='border-t border-[rgb(61,74,108)] '/>
         <div className=" h-13 mt-4 py-1 w-full flex justify-center items-center">
          <div className=" h-10 w-full flex justify-center items-center ">
              <h2 className='font-sans  text-md text-[rgb(173,181,189)]'>© 2026 Geekinate.</h2>
          </div>
         </div>
      </section>
       
    </>
  )
}
