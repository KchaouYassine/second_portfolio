import React, {useState} from 'react'
import './global.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [feedback, setFeedback ] = useState('Freue mich auf Ihre Nachricht!')
  const [ firstName , setFirstName] = useState('')
  const [ lastName , setLastName] = useState('')
  const [ number , setNumber] = useState('')
  const [ email , setEmail] = useState('')
  const [ message , setMessage] = useState('')

  const sendEmail = () => {
    const templateParams = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      number : number,
      message : message,
    }
    
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setFeedback('Vielen Dank für Ihre Nachricht');
      setFirstName('');
      setLastName('');
      setNumber('');
      setEmail('');
      setMessage('')
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <React.Fragment>
        <section className="p-10 mt-5 text-white bg-black " id="contact">
            <div className='w-full my-10 text-center '>
                <h1 className='relative py-2 text-5xl font-medium tracking-wider title text-cyan'>Kontaktiere mich</h1>
                <p className=''>{feedback}</p>
            </div>
            <div className="flex flex-col content-center justify-center w-10/12 mx-auto mt-5 ">
              
                <div className="flex flex-wrap justify-between w-full ">
                  <div className="w-full lg:w-[45%] my-4 " >
                    <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' value={firstName} placeholder='Name' onChange={ (event) => setFirstName(event.target.value)}/>
                  </div>
                  <div className="w-full lg:w-[45%] my-4 " >
                      <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='text' value={lastName}  placeholder='Nachname' onChange={ (event) => setLastName(event.target.value)}/>
                  </div>
                  <div className="w-full lg:w-[45%] my-4 " >
                    <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='email' value={email} placeholder='Email' onChange={ (event) => setEmail(event.target.value)}/>
                  </div>
                  <div className="w-full lg:w-[45%] my-4 " >
                      <input className="w-full p-5 text-base text-white border-none outline-none bg-contactbg" type='number' value={number} placeholder='Handynummer' onChange={ (event) => setNumber(event.target.value)}/>
                  </div>
                  
                </div>
                <div className="w-full my-4">
                  <div className="">
                    <textarea className="w-full p-5 text-base text-white border-none outline-none resize-none bg-contactbg h-28" value={message} placeholder='Nachricht' onChange={ (event) => setMessage(event.target.value)}/>
                  </div>
                </div>
                <div className="w-full my-4">
                  <div>
                    <input className="w-full p-2 text-base font-semibold tracking-widest text-white border-none outline-none cursor-pointer resize-none bg-cyan" type='submit' onClick={sendEmail} value="Send"/>
                  </div>
                </div> 
            </div>
            
        </section>
        
    </React.Fragment>
  )
}

export default Contact