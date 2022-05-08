import React from 'react'
import './global.css'



const Contact = () => {
  return (
    <React.Fragment>
        <section className="h-screen p-10 text-white bg-black " id="contact">
            <div className='w-full my-10 text-center '>
                <h1 className='relative py-2 text-5xl font-medium tracking-wider title text-cyan'>Contact Me</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis quo</p>
            </div>
            <div className="flex flex-col content-center justify-center w-10/12 mx-auto mt-5 ">
              
                <div className="flex flex-wrap justify-between w-full ">
                  <div className="w-[45%] my-4 " >
                    <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' name="firstName" placeholder='first Name '/>
                  </div>
                  <div className="w-[45%] my-4 ">
                      <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' name="firstName" placeholder='first Name '/>
                  </div>
                  <div className="w-[45%] my-4 " >
                    <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' name="firstName" placeholder='first Name '/>
                  </div>
                  <div className="w-[45%] my-4 ">
                      <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' name="firstName" placeholder='first Name '/>
                  </div>
                  
                </div>
                <div className="w-full my-4">
                  <div className="">
                    <textarea className="w-full p-5 text-base text-white border-none outline-none resize-none bg-contactbg h-28" name='message'  placeholder='Message '/>
                  </div>
                </div>
                <div className="w-full my-4">
                  <div>
                    <input className="w-full p-2 text-base font-semibold tracking-widest text-white border-none outline-none cursor-pointer resize-none bg-cyan" type='submit' value="Send"/>
                  </div>
                </div>
             
              
            </div>
            
        </section>
        
    </React.Fragment>
  )
}

export default Contact