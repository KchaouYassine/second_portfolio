import React from 'react'
import data from '../utils/data'

const Hobbies = () => {

  const hobbiesData = data?.data?.hobbies
  return ( 
    <section className='p-10' id="hobbies">
      <div className='w-full my-5 text-center'>
        <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>Meine Hobbies</h1>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
        {
          hobbiesData.map((hobby, key) =>(
            <div className="text-center py-10 px-5 m-5 transition-all bg-slate-50 max-w-[340px] hover:bg-black expBox"  key={key}>
              <div className='flex justify-center w-full transition-all'>
                  <img  className='object-cover max-w-7xl' src={require(`./icons/hobbies/${hobby.icon}`)} height='128' width='128' alt ="icon"/>
              </div>
              
              <h4 className=' bg-cyan mx-[-1.25rem]  my-2 p-3 text-xl font-medium text-white'>{hobby.title}</h4>
              <p className='mb-5'>{hobby.description} </p>
            </div>
          ))  
        }
    </div>
    </section>
  )
}

export default Hobbies