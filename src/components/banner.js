import React from 'react'
import pic from "../utils/images/bg.jpg";
import './banner.css'

const Banner = () => {

    const toogleMenu= () =>{
        const toogleMenu=document.querySelector('.toggle');
        toogleMenu?.classList.toggle('active');

        }

    return (
        <React.Fragment>
            <div className='fixed z-50 toggle top-8 right-8 w-14 h-14 ' onClick={toogleMenu}></div>
            <section id='banner' className='flex items-center justify-center h-screen '>
                <div className='w-2/5'>
                     <img className='object-cover w-full h-full' src={pic} alt='personal_image' /> 
                </div>
                <div className='flex flex-col items-start justify-around flex-1 w-3/5 h-full px-24 '>
                    {/* remove the flex */}
                    {/* <h5 className='font-bold text-white uppercase top-6 left-24 bg-slate-700'>My Portfolio</h5> */}
                    <div>
                        <h4 className='py-2 text-3xl font-medium'><span className='text-4xl font-bold text-cyan '>Hello</span> I'm</h4>
                        <h2 className='py-2 text-5xl font-bold leading-4 text-gray '>Nabih Salah</h2>
                        <h4  className='py-2 text-3xl font-medium'>I'm an Embedded Systems Engineer</h4>
                        <p className='my-5 text-base text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis quo porro quia praesentium? Animi quia optio, dolorum porro et accusantium quae, facilis mollitia eveniet beatae quos temporibus reiciendis quibusdam!
                        Maiores, debitis, quibusdam officia soluta aliquam earum cupiditate vero sit distinctio facilis dignissimos temporibus. Ea, voluptatibus sunt tenetur magni id incidunt temporibus veniam, iure possimus similique minus mollitia aliquid! Tenetur!
                        </p>
                        <a href='#' className='px-8 py-3 my-2 font-medium text-white bg-cyan' >About Me</a>
                    </div>

                </div>

            </section>
        </React.Fragment>
    )
}

export default Banner