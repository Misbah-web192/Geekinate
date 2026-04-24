import React from 'react'
import pic from '../assets/pic.webp'
import health from '../assets/health.webp'
import user from '../assets/user.webp'
import real from '../assets/real.webp'
import tax from '../assets/tax.webp'
import twitter from '../assets/twitter.webp'

export const Portfolio = () => {
    return (
        <>
            <div className="h-[300px] bg-[rgb(227,246,233)] flex justify-center items-center ">
                <div className="h-[20%] mt-21 w-full">
                    <h1 className='font-sans text-center font- text-5xl leading-normal text-[rgb(22,28,45)]'>Portfolio</h1>
                </div>
            </div>
            <div class="custom-shape-divider-top-1776190353-2 overflow-x-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="   pt-10">
                <ul className='flex w-full  flex-wrap justify-center items-center gap-2'>
                    <li className='border border-gray-400  py-1 px-3 font-sans text-gray-800 rounded-sm'>All</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >Finance</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >Healthcare</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >Marketing</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >Bussiness</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >SAAS</li>
                    <li className='border border-gray-400 py-1 px-3 font-sans text-gray-800 rounded-sm' >Education</li>
                </ul>
            </div>
            <div className=" flex-wrap p-10 gap-9 flex justify-center items-center">
                <div className=" h-70 w-90 rounded-lg p-1 flex justify-center items-center flex-col" >
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={pic} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>

                        Fintech SAAS App
                    </p>
                    </div>
                </div>
                <div className=" h-70 w-90  rounded-lg p-1 flex justify-center items-center flex-col">
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={health} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>


                        Healthcare Website
                    </p>
                    </div>
                </div>
                <div className=" h-70 w-90  rounded-lg p-1 flex justify-center items-center flex-col">
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={user} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>

                        Social Media Analytics SaaS (MVP)
                    </p>
                    </div>
                </div>
                <div className=" h-70 w-90  rounded-lg p-1 flex justify-center items-center flex-col">
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={real} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>

                        Real Estate Blockchain platform
                    </p>
                    </div>
                </div>
                <div className=" h-70 w-90  rounded-lg p-1 flex justify-center items-center flex-col">
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={tax} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>

                        Tax Consultancy Firm's Website
                    </p>
                    </div>
                </div>
                <div className=" h-70 w-90  rounded-lg p-1 flex justify-center items-center flex-col">
                    <div className=" bg-[rgb(243,250,253)] rounded-t-xl h-50 w-full">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="bg-[rgb(227,242,255)] rounded-b-xl h-15 w-full flex justify-center items-center"><p className='text-md tracking-wide text-[rgb(63,64,67)]'>

                        Twitter Bot
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}
