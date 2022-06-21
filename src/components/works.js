import React,{Component} from 'react'
import pic1 from "../utils/images/icon1.png";
import data from "../utils/data"
import { AiFillAndroid } from 'react-icons/ai';
import ReactHtmlParser from 'react-html-parser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee)


const Works = () => {

   const honoraryActivities=data?.data?.honoraryActivities
//    const icons = require("@fortawesome/free-solid-svg-icons");

   const renderCompoment = ( componentName) =>{
    let MyComponent = componentName;
    return <MyComponent  className='inline-block text-white icon text-9xl' style={{transition:'0.5s ease-in-out'}} />
    }
  return (
    <React.Fragment>
        <section className="min-h-screen " id="works">
        <div className='w-full my-8 text-center '>
                <h1 className='relative py-2 text-3xl font-bold tracking-wider title text-cyan'>{honoraryActivities?.title}</h1>
                <p className=''> {honoraryActivities?.indication}</p>
        </div>
        <div className='flex items-center justify-center'>
        <div className='relative w-[80%]  flex justify-between flex-wrap my-[5%]'>
                {honoraryActivities?.activities.map(activity =>{
                   
                    return( 
                        <div className='card relative h-72 bg-slate-50 flex w-[45%]  my-4 mx-0 p-2'>
                            <div className='cardImageBox absolute top-0 left-0 w-full h-full z-10  bg-[#333]  flex justify-center items-center overflow-hidden transition-all'  data-card={activity.cardHighlight}>
                               {/* <AiFillAndroid className='inline-block text-white icon text-9xl' style={{transition:'0.5s ease-in-out'}} /> */}
                               {/* <FontAwesomeIcon icon={faCoffee} className='inline-block text-white icon text-9xl' style={{transition:'0.5s ease-in-out'}} /> */}
                               <FontAwesomeIcon icon={activity.cardIconName} className='inline-block text-white icon text-9xl' style={{transition:'0.5s ease-in-out'}} />
                            </div>
                            <div className='absolute right-0 flex flex-col items-start justify-center h-full p-5 ml-2 test'>
                                <h3 className='mb-1 text-2xl font-bold'>{activity.cardTitle}</h3>
                                <small  className='mb-1'>{activity.cardTime}</small>
                                <ul className='ml-3 list-disc '>
                                    {activity.cardActivities.map( (i,index)=>(<li key={index}>{i}</li>))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
        </div>
        

        </section>
    </React.Fragment>
  )
}

export default Works