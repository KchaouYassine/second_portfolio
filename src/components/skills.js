import React from 'react'
import './global.css'
import pic from "../utils/images/skills.png";
import data  from '../utils/data';



const Skills = () => {
    const skills= data?.data?.skills;
  return (
    <React.Fragment>
       
        <section className="min-h-screen  w-[80%] mx-auto " id="skills">
            <div className='w-full my-8 text-center '>
                    <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>{skills.title}</h1>
                    <p className=''>{skills.indication}</p>
            </div>
            <div className='flex items-center'>
                <img className='object-cover' src={pic} alt='skills_image' /> 
                <div className='flex-1 '>
                    {skills.skills.map((skill)=>(
                        <div>
                        <h3 className='flex items-center justify-between my-1'>{skill.skill} 
                            <span className=' text-xs border-2 border-[#CCC] p-1 rounded-sm text-cyan'>{skill.procent}</span></h3>
                        <div className='relative bg-[#eee] h-6 rounded-md overflow-hidden'>
                            <span className='absolute top-0 left-0 h-full bg-cyan' style={{width:`${skill.procent}`}}></span>
                        </div>
                    </div>
                    ))}
                    

                </div>

            </div>
            
        </section>
        
    </React.Fragment>
  )
}

export default Skills