import React from 'react'
import pic from "../utils/images/banner.jpg";
import data from "../utils/data"
import './global.css'

const Banner = () => {

    const home=data?.data?.home
    return (
        <React.Fragment>
           
            <section id='home' className='flex items-center justify-center h-screen '>
                <div className='w-2/5 h-full'>
                     <img className='object-cover w-full h-full' src={pic} alt='personal_image' /> 
                </div>
                <div className='flex flex-col items-start justify-around flex-1 h-full px-4 lg:px-24 lg:w-3/5 '>
                    {/* remove the flex */}
                    {/* <h5 className='font-bold text-white uppercase top-6 left-24 bg-slate-700'>My Portfolio</h5> */}
                    <div>
                        <h4 className='mb-2 text-3xl font-medium'><span className='text-4xl font-bold text-cyan '>Hallo</span> I'm</h4>
                        <h2 className='mb-2 text-3xl font-bold lg:text-5xl text-gray '>{home.name}</h2>
                        <h4  className='mb-2 text-2xl font-medium lg:text-3xl'>{home.work}</h4>
                        {/* 
                            <p className='my-5 text-base text-light'>{home.description}</p>
                            <a href='#' className='px-8 py-3 my-2 font-medium text-white bg-cyan' >About Me</a>
                        */}
                    </div>

                </div>

            </section>
            
        
        </React.Fragment>
    )
}

export default Banner