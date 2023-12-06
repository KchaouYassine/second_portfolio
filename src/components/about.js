import React from 'react'
import pic from "../utils/images/aboutMe.jpg";
import './global.css'

const About = () => {  
  return (
    <React.Fragment >
        <section className="p-10 text-white bg-black " id="about">
            <div className='w-full text-center '>
                <h1 className='relative py-2 text-5xl font-medium tracking-wider title text-cyan'>Über mich</h1>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div className='ml-10 w-[49%]  hidden lg:block ' >
                  <img className='object-cover' src={pic} alt='personal_image' height="800px" width="800px"/> 
                </div>
                <div className='lg:w-[49%] ' >
                  <div className='text-lg lg:leading-9'>
                  <p>
                    Ich bin Mohamed Yassine Kchaou und komme aus Tunesien. Mit meinen 24 Jahren bin ich Bachelor-Student im Fachbereich Informatik an der Technischen Universität Kaiserslautern RPTU. Bereits nach meinem ersten Semester an der Universität faszinierten mich Software und Programmierung, und ich strebe eine zukünftige Karriere als Web-Entwickler an. </p>

                    <p> Um diesem Ziel näher zu kommen, habe ich Zeit und Mühe investiert, um meine Kenntnisse in Webentwicklungssprachen zu vertiefen. Tag für Tag arbeite ich daran, meine Fähigkeiten zu verbessern, und momentan verfüge ich über solide Kenntnisse im Bereich Webentwicklung.</p>

                    <p> Seit fast zwei Jahren bin ich als studentische Hilfskraft (Hiwi) im Bereich Webentwicklung am Fraunhofer-Institut für Techno- und Wirtschaftsmathematik ITWM tätig. Diese Erfahrung hat meine praktischen Fähigkeiten erweitert und mir Einblicke in die anspruchsvolle Welt der Webentwicklung verschafft. Ich freue mich darauf, mein Wissen weiter zu vertiefen und neue Herausforderungen in diesem spannenden Bereich anzunehmen.
                    </p>
                  </div>
                </div>
            </div>
        </section>
        
    </React.Fragment>
  )
}

export default About
