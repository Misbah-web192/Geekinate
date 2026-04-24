import React from 'react'
import sortlist from '../assets/sortlist.webp'
import partner from '../assets/partner.webp'
import clutch from '../assets/clutch.webp'
import shopifypartner from '../assets/shopifypartner.webp'
import googlepartner from '../assets/googlepartner.webp'
import cloudways from '../assets/cloudways.webp'

export const Partners = () => {
    return (
        <>

            <div class="custom-shape-divider-top-1776190353 overflow-x-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="curve bg-[rgb(32,41,66)]  w-full">
              
              <div className="partner p-8  flex justify-center items-center  ">
                <div className="partner-child mt-30 flex justify-center items-center  h-20 w-[100%]">
                    <h2 className='font-sans font- text-4xl leading-normal text-[rgb(173,181,189)]'>Collaborators and Partners</h2>
                </div>
              </div>
                 
                 <div className="partner  flex justify-center items-center gap-10 p-10 lg:px-70 flex-wrap  w-full ">

                  <div className="partner-child flex justify-center items-center   h-18 w-45">
                    <img src={sortlist} alt="" />
                  </div>
                  <div className="partner-child  flex justify-center items-center  h-18 w-45">
                    <img src={partner} alt="" />
                  </div>
                  <div className="partner-child flex justify-center items-center   h-18 w-45">
                    <img src={clutch} alt="" />
                  </div>
                  <div className="partner-child flex justify-center items-center  h-18 w-45">
                    <img src={shopifypartner} alt="" />
                  </div>
                  <div className="partner-child flex justify-center items-center h-18 w-45">
                    <img src={googlepartner} alt="" />
                  </div>
                  <div className="partner-child flex justify-center items-center  h-18 w-45">
                    <img src={cloudways} alt="" />
                  </div>

                 </div>
            </div>
            <div class="custom-shape-divider-top-1776190353-1 overflow-x-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
            </div>

        </>
    )
}
