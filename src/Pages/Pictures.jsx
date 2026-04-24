import React from 'react'
import amazon from '../assets/amazon.svg'
import react from '../assets/react-1.svg'
import mongo from '../assets/mongodb.svg'
import node from '../assets/node.svg'
import next from '../assets/next.svg'
import unity from '../assets/unity.svg'

export const Pictures = () => {
  return (
    <>
    <section className='flex justify-center flex-wrap items-center pt-25 pb-12 m-10 w-[80%] lg:w-full lg:m-0 gap-20  '>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={amazon} alt="amazon-image" /></div>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={react} alt="react-image" /></div>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={mongo} alt="mongo-image" /></div>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={node} alt="node-image" /></div>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={next} alt="next-image" /></div>
        <div className="picture-boxes flex justify-center items-center h-7 w-20 "><img src={unity} alt="unity-image" /></div>
    </section>
    <hr className='border-t border-gray-300'/>
    </>
  )
}
