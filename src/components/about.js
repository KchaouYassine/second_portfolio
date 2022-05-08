import React from 'react'
import pic from "../utils/images/bg1.jpg";

import data from "../utils/data"
import './global.css'

const About = () => {
  const aboutData = data?.data?.about
  
  return (
    <React.Fragment >
        <section className="h-screen p-10 text-white bg-black" id="about">
            <div className='w-full text-center '>
                <h1 className='relative py-2 text-5xl font-medium tracking-wider title text-cyan'>About Me</h1>
                <p className=''>{aboutData.indication}</p>
            </div>
            <div className='flex justify-between mt-10'>
                <div className='w-[49%] ' >
                    <p className='leading-9 text-center'>{aboutData.description}</p>
                </div>
                <div className='ml-10 w-[49%] ' >
                  <img className='object-cover w-full h-full' src={pic} alt='personal_image' /> 
                </div>
            </div>
        </section>
        
    </React.Fragment>
  )
}

export default About
