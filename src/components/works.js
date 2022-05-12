import React from 'react'
import pic1 from "../utils/images/icon1.png";
import data from "../utils/data"

const Works = () => {

   
  return (
    <React.Fragment>
        <section className="min-h-screen " id="works">
        <div className='w-full my-8 text-center '>
                <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>My Work Experiences</h1>
                <p className=''> dolor sit amet consectetur adipisicing elit. Est officiis quo porro quia praes</p>
        </div>
        <div className='flex items-center justify-center'>
        <div className='relative w-[1000px] flex justify-between flex-wrap my-5'>
                <div className='card relative h-64 bg-slate-50 flex w-[45%]  my-4 mx-0'>
                    <div className='cardImageBox absolute top-0 left-0 w-full h-full z-10 bg-[#333]  flex justify-center items-center overflow-hidden transition-all'  data-card='design'>
                        <img  className='object-cover max-w-[100px] transition-all' src={pic1} alt ="icon"/>
                    </div>
                    <div className='absolute right-0 flex flex-col items-start justify-center h-full p-5 ml-2 test'>
                        <h3 className='mb-1 text-2xl font-bold'>Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis quo porro quia praesentium? Animi quia optio, dolorum porro et accusantium quae, facilis mollitia eveniet beatae quos temporibus reiciendis quibusdamMaiores, debitis, quibusdam  </p>
                        <a className=' inline-block mt-3 px-3 py-1 decoration-none bg-[#333] text-white' href='#'> Read More</a>
                    </div>
                </div>
            </div>
        </div>
        

        </section>
    </React.Fragment>
  )
}

export default Works