import React from 'react'
import data from "../utils/data"

const Works = () => {
    const workExperiencesData= data?.data?.workExperiences

   
  return (
    <React.Fragment>
        <section className="px-4" id="works">
        <div className='w-full my-8 text-center '>
                <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>Meine Projekte</h1>
        </div>
        <div className='grid grid-cols-1 gap-x-48 gap-y-12 lg:grid-cols-2 lg:px-24'>
            {
                workExperiencesData.map(wE => (
                    <div className='relative h-64 card w-400 md:w-auto bg-slate-50 '>
                        <div className='cardImageBox absolute top-0 left-0 w-full h-full z-10 bg-[#333]  flex justify-center items-center overflow-hidden transition-all'  data-card={wE.title}>
                            <img className='object-cover max-w-[100px] transition-all'  src={require(`./icons/works/${wE.icon}`)} height='128' width='128' alt ="icon"/>
                        </div>
                        <div className='absolute right-0 flex flex-col items-start justify-center h-full p-5 ml-2 test'>
                            <h3 className='mb-1 text-2xl font-bold'>{wE.title}</h3>
                            <p>{wE.description}</p>
                            <a className=' inline-block mt-3 px-3 py-1 decoration-none bg-[#333] text-white' href={wE.link}> Read More</a>
                        </div>
                    </div>
                ))
            }
        </div>
        

        </section>
    </React.Fragment>
  )
}

export default Works