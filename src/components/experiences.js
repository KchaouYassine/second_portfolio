import React from 'react'
import pic1 from "../utils/images/icon1.png";
import data from "../utils/data"

const Experiences = () => {

    const experiencesData= data?.data?. experiences
  return (
    <React.Fragment>
        <section className="h-screen p-10 " id="experiences">
            <div className='w-full my-8 text-center '>
                <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>My Experiences</h1>
                <p className=''>{experiencesData.indication}</p>
            </div>

            <div className='flex flex-wrap content-center justify-center '>
                {
                    experiencesData.experiences.map(experience =>(
                        <div className="text-center py-10 px-5 m-5 transition-all bg-slate-50 max-w-[340px] hover:bg-black expBox ">
                        <div className='flex justify-center w-full transition-all '>
                            <img  className='object-cover max-w-7xl' src={pic1} alt ="icon"/>
                        </div>
                       
                        <h2 className='mt-5 mb-2 text-2xl font-semibold transition-all' >{experience.position}</h2>
                        <h4 className=' bg-cyan ml-[-1.25rem] mr-[-1.25rem] p-3 text-xl font-medium text-white'>{experience.society}</h4>
                        <small className=''>{experience.timeDuration}</small>
                        <p className='mb-5'>{experience.description} </p>
                        <a href='#' className='py-3 my-2 font-medium text-white px-7 bg-cyan' >More</a>
                    </div>
                    ))  
                }
                
            </div>

        </section>
    </React.Fragment>
  )
}

export default Experiences